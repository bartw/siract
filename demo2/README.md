# Demo 2

## Intro

Demo to explain jsx and different ways to create it.

## Quickstart

```shell
npm install
npm start
```

## From scratch

```shell
npm init
npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react
npm install --save react react-dom
touch webpack.config.js .babelrc index.html index.jsx Welcome.jsx
```

Add resolving of jsx files to webpack.config.js.

```js
resolve: {
    extensions: ['.js', '.jsx']
}
```

Create welcome component in 3 ways in Welcome.jsx.

```jsx
import React from 'react';
/*
export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
*/
/*
export default class Welcome extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
*/

export default function Welcome(props) {
    return React.createElement(
        'h1',
        null,
        'Hello, ' + props.name
    );
}

Welcome.propTypes = {
  name: React.PropTypes.string.isRequired,
};
```

Use welcome component in 2 ways in index.jsx.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
/*
ReactDOM.render(
  <Welcome name="Sirus" />,
  document.getElementById('root'),
);
*/

const WelcomeElement = React.createElement(
    Welcome,
    { name: 'Sirus' },
    null,
);
ReactDOM.render(
    WelcomeElement,
    document.getElementById('root')
);
```