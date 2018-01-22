# has-tabbed

[![npm version](https://img.shields.io/npm/v/has-tabbed.svg?style=flat-square)](https://www.npmjs.com/package/has-tabbed)
[![npm downloads](https://img.shields.io/npm/dm/has-tabbed.svg?style=flat-square)](https://www.npmjs.com/package/has-tabbed)

Small library that adds CSS class to html when user starts tabbing,
and removes it if user clicks anywhere.

This enables you to have focus outline only when user is using keyboard.

[Demo](https://stanko.github.io/has-tabbed/)

## Usage

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

Then you can use `--tabbed` class in your CSS

```css
/* This is naive example used in the demo */
* {
  outline: 1px dotted rgba(50, 50, 50, 0);
  outline-offset: 0.8rem;
  will-change: outline-color, outline-offset;
}

.--tabbed *:focus {
  outline: 1px dotted rgba(50, 50, 50, 1);
  outline-offset: 0.5rem;
  transition: outline-offset 250ms;
}
```

## Options

### className

By default library will add `--tabbed` class to `html` element.
To change it just pass custom class name when creating an instance.

```js
import HasTabbed from 'has-tabbed';

const tabbed = new HasTabbed('my-super-duper-class');
```

## Old school usage

You should use ES modules, but you can use it directly in the browser.

```html
<script src="has-tabbed.js"></script>
<script>
  var ht = new HasTabbed();
</script>
```
