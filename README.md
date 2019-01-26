## Motivation
Have a common webpack, babel setup for react projects without spending a few hours to set them up every time.

## Credits
[Adeel Imran's awesome guide on medium](https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff)

## Features
* Webpack 4
  * Production: Minify `css` and `js`
  * Assets handling: Assets(e.g. images, fonts) in `src/static` are copied to `/dist`
  * Code splitting of components via `import()`
  * SASS
* Babel 7
* Eslint with airbnb style guide


## How to use
* Development: `npm start`
* Production: `npm build`