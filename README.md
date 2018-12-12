# Blinking


## Installation

### Using NPM

```bash
npm install @lyssal/blinking
```

### Using YARN

```bash
yarn add @lyssal/blinking
```


## How to use

```javascript
import '@lyssal/blinking/lib/blinking.css';
import Blinking from '@lyssal/blinking/lib/blinking.amd';

const myElement = global.document.querySelector('.to_blink');
const blinking = new Blinking(myElement);

// Start the blinking
blinking.start();

// Stop the blinking
blinking.stop();
```

For more informations, read the documentation in `@lyssal/blinking/src/js/blinking.js`.


## Classic use

```html
<link rel="stylesheet" href="{...}/blinking/lib/blinking.css">

<script type="text/javascript" src="{...}/blinking/lib/blinking.var.js"></script>
<script type="text/javascript">
  var myElement = document.querySelector('.to_blink');
  var blinking = new Blinking(myElement);
  blinking.start();
</script>
```


## Customize the blinking effect

The blinking effect is created thanks to CSS.
Just examine the `blinking.css` file and overload this CSS as you want.
