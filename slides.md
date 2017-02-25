# React

* https://facebook.github.io/react/
* React vs MVC
* JSX
* Virtual DOM

----------

# React vs MVC

* React isn't an MVC framework
* React is a library for building composable user interfaces
* Reusable UI components that present data that changes over time

----------

# Demo 1

![hello](https://raw.githubusercontent.com/bartw/siract/master/assets/hello_meme.jpg)

----------

# JSX

* Syntax extension to JavaScript
* Syntactic sugar for React.createElement(component, props, ...#children)
* JSX produces React elements
* Embed any JavaScript expression in JSX

----------

# Demo 2

----------

# Virtual DOM

* React elements are plain objects, and are cheap to create
* Render creates a tree of React elements
* React elements are immutable
* React DOM compares the element to the previous one
* React DOM only applies the DOM updates necessary
