# mdi-react [![npm package](https://img.shields.io/npm/v/mdi-react.svg?style=flat-square)](https://npmjs.org/package/mdi-react) [![Material Design Icons version](https://img.shields.io/badge/mdi-v7.2.96-blue.svg?style=flat-square)](https://materialdesignicons.com) [![build status](https://img.shields.io/travis/levrik/mdi-react/master.svg?style=flat-square)](https://travis-ci.org/levrik/mdi-react)
[Material Design Icons](https://materialdesignicons.com) for React packaged as single components

## Installation

```bash
npm install mdi-react
# or if you use Yarn
yarn add mdi-react
```
## Usage

Just search for an icon on [materialdesignicons.com](https://materialdesignicons.com) and look for its name.  
The name translates to PascalCase followed by the suffix `Icon` in `mdi-react`.  
Also it's possible to import with an alias. You can find them on the detail page of the respective icon.

For example the icons named `alert` and `alert-circle`:

```javascript
import AlertIcon from 'mdi-react/AlertIcon';
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';

const MyComponent = () => {
  return (
    <div>
      {/* The default color is the current text color (currentColor) */}
      <AlertIcon color="#fff" />
      {/* The default size is 24 */}
      <AlertCircleIcon className="some-class" size={16} />
      {/* This sets the icon size to the current font size */}
      <AlertIcon size="1em" />
    </div>
  );
};
```

To change the color on hover you can just use your own class and plain CSS.

```css
.some-class:hover {
  fill: red;
}
```

You can also add default styling via the `mdi-icon` class.

```css
.mdi-icon {
  background-color: green;
}
```

## Accessibility 

Icons get translated to svg elements in the DOM. In order for SVG elements to be accessible, the SVG element needs a title element with an ID and the SVG element should have an aria-labelledby attribute which should be set to the ID of the title. In order to do this, a title prop can be passed in to the Icon. 

```javascript
import SearchIcon from 'mdi-react/SearchIcon';

const MyComponent = () => {
  const title = {
    id: 'title-id',
    name: 'Icon Title',
  };

  return (
    <div>
      <SearchIcon title={title}/>
    </div>
  );
};
```

In the DOM, this Icon would get translated to this:

```html
<svg class="mdi-icon css-195mvoi e146bxl90" aria-labelledby="title-id" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <title id="title-id">
    Icon Title
  </title>
  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
</svg>
```
