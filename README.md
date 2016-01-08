# PostCSS Line Height [![Build Status][ci-img]][ci]

[PostCSS] plugin for converting px line heights to unitless line heights

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/tormjens/postcss-line-height.svg
[ci]:      https://travis-ci.org/tormjens/postcss-line-height

```css
.foo {
    line-height: 24px;
}
```

```css
.foo {
  line-height: 1.5;
}
```

## Usage

```js
postcss([ require('postcss-line-height') ])
```

See [PostCSS] docs for examples for your environment.

## Options

```js
{
    baseFontSize: 16
}
```
