'use strict';

(function() {
  var TAB_KEY_CODE = 9;
  var DEFAULT_CLASSNAME = 'has-tabbed';

  function HasTabbed(userOptions) {
    if (typeof document === 'undefined') {
      // Server side rendering
      return;
    }

    var options = userOptions || {};

    this.className = options.className || DEFAULT_CLASSNAME;
    this.triggerOnAllKeys = options.triggerOnAllKeys || false;

    // Cache html class list pointer
    this.htmlClassList = document.querySelector('html').classList;

    this.addEvents();
  }

  HasTabbed.prototype.addEvents = function() {
    // Bind handlers
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);

    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('mousedown', this.handleClick);
  };

  HasTabbed.prototype.handleKeyDown = function(e) {
    var isTab = e.key === 'Tab' || e.keyCode === TAB_KEY_CODE;

    if (this.triggerOnAllKeys || isTab) {
      this.htmlClassList.add(this.className);
    }
  };

  HasTabbed.prototype.handleClick = function() {
    this.htmlClassList.remove(this.className);
  };

  HasTabbed.prototype.removeEvents = function() {
    this.htmlClassList.remove(this.className);
    this.htmlClassList = null;

    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('mousedown', this.handleClick);
  };


  if (typeof module !== 'undefined' && module.exports) {
    HasTabbed.default = HasTabbed;
    module.exports = HasTabbed;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) { // eslint-disable-line no-undef
    // register as 'has-tabbed', consistent with npm package name
    define('has-tabbed', [], function() { // eslint-disable-line no-undef
      return HasTabbed;
    });
  } else if (typeof window !== 'undefined') {
    window.HasTabbed = HasTabbed;
  }
}).call(this);
