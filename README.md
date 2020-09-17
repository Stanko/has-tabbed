# has-tabbed

[![npm version](https://img.shields.io/npm/v/has-tabbed.svg?style=flat-square)](https://www.npmjs.com/package/has-tabbed)
[![npm downloads](https://img.shields.io/npm/dm/has-tabbed.svg?style=flat-square)](https://www.npmjs.com/package/has-tabbed)

Small library that adds CSS class to html when user starts using keyboard to navigate, and removes it if user clicks anywhere.

This enables you to have focus outline only when user is using keyboard.

[Demo](https://stanko.github.io/has-tabbed/) | [Blog post](https://stanko.github.io/has-tabbed-aka-should-i-release-small-libraries/)

## Usage

Get it from npm

```
npm install --save has-tabbed
```

and use it

```js
import HasTabbed from 'has-tabbed';

const tabbed = new HasTabbed();
```

That's it. By default library is activated when instance is created.
You can control it manually by using `activate` and `deactivate` methods.

```js
// Removes all listeners and CSS class
tabbed.deactivate();

// Adds listeners again
tabbed.activate();
```

Then you can use `has-tabbed` class in your CSS

```css
/* This is naive example used in the demo */
* {
  outline: 3px solid transparent;
  outline-offset: 0.3rem;
}

.has-tabbed *:focus {
  outline: 3px solid #409ad7;
}
```

## Options

Library accepts a single options object with the following properties:

* **className** (default `has-tabbed`)

  CSS class name which will be added to the `html` element. 

* **triggerOnAllKeys** (default `false`)

  If you want to add CSS class on all keyboard events not only when user presses tab, change this one to `true`


```js
import HasTabbed from 'has-tabbed';

const tabbed = new HasTabbed({
  className: 'navigating-using-keyboard',
  triggerOnAllKeys: true,
});
```

## v1.0.0 breaking changes

* `className` property is now replaced with an [options object](#options).
* Default class name is changed from `--tabbed` to `has-tabbed`.

## Old school usage

You should use ES modules, but you can use it directly in the browser.

```html
<!-- copy "has-tabbed.js" to your project -->
<script src="has-tabbed.js"></script>
<script>
  var tabbed = new HasTabbed();
</script>
```
