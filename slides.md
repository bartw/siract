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

![components](https://raw.githubusercontent.com/bartw/siract/master/assets/components_meme.jpg)

----------

# Virtual DOM

* React elements are plain objects, and are cheap to create
* Render creates a tree of React elements
* React elements are immutable
* React DOM compares the element to the previous one
* React DOM only applies the DOM updates necessary

----------

# State

* Do Not Modify State Directly
* State Updates May Be Asynchronous
* State Updates are Merged
* Data Flows Down

----------

# Demo 3

![presentation](https://raw.githubusercontent.com/bartw/siract/master/assets/presentation_meme.jpg)

----------

# Next steps

* Testing: [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/)
* Routing: [React Router](https://github.com/ReactTraining/react-router), [Junctions](https://junctions.js.org/)
* State management: [Flux](https://facebook.github.io/flux/), [Redux](http://redux.js.org/), [MobX](https://mobx.js.org/)
* Beyond: [React Native](https://facebook.github.io/react-native/), [Electrode](http://www.electrode.io/)

----------

# Extra demo 4

![presentation](https://raw.githubusercontent.com/bartw/siract/master/assets/router_meme.jpg)