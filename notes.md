# Hello world

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
  <Welcome name="Sirus"/>,
  document.getElementById('root')
);
```

----------

## Build pipeline

* npm: https://www.npmjs.com/
* webpack https://webpack.github.io/
* babel: https://babeljs.io/
* eslint: http://eslint.org/
* mocha: https://mochajs.org/
* chai: http://chaijs.com/
* enzyme: http://airbnb.io/enzyme/

----------

## Demo

https://github.com/bartw/reactdemo

----------

## State management

* Flux: https://facebook.github.io/flux/
* Redux: http://redux.js.org/
* MobX: https://mobx.js.org/

----------

## Worth checking out

* React Native: https://facebook.github.io/react-native/
* Electrode: http://www.electrode.io/
* Elm: http://elm-lang.org/


----------

React isn't an MVC framework.
React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.


----------

reconciliation

The data returned from render is neither a string nor a DOM node -- it's a lightweight description of what the DOM should look like.

----------

React Chrome Developer Tools

----------

# JSX

* JSX is a XML-like syntax extension to ECMAScript without any defined semantics. 
* syntax extension to JavaScript
* JSX may remind you of a template language, but it comes with the full power of JavaScript.
* You can embed any JavaScript expression in JSX by wrapping it in curly braces.
* User-Defined Components Must Be Capitalized

----------

# Typechecking With PropTypes

----------

* Controversial license