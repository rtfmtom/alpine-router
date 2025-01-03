# alpine-router

This is a simple router for AlpineJS. It's a work in progress. Suggestions are welcome

## index.html
This is the entry point to the application. Navigation is handled by the router component in `components/router.js`

## main.js
Register your `Alpine.data` components here.

## /tempates
Templates are just html exported as template strings. These can be composed with other `x-data` components or templates.

The `/*html*/` comment at the top will give you syntax highlighting in VsCode if you install `es6-string-html`

## /components
I am referring to `Alpine.data` (aka `x-data` objects) as components. Those live here.