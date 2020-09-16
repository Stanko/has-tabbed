'use strict';

(function() {
  var DEFAULTS = {
    treatAnyKeyboardEventAsTab: false,
    className: '--tabbed'
  };

  function HasTabbed(config) {
    if (typeof config === 'string') {
      this.className = config;
    } else if (typeof config === 'object') {
      Object.assign(this, DEFAULTS, config);
    } else {
      Object.assign(this, DEFAULTS);
    }

    if (typeof document === 'undefined') {
      // Server side rendering
      return;
    }

    // Cache html class list
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
    if (e.key === 'Tab' || this.treatAnyKeyboardEventAsTab) {
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
