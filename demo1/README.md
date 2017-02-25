# Demo 1

## Intro

Demo to create a "Hello world" application using react, babel and webpack.

## Quickstart

Open up a shell and type the following commands.
Go to a browser and browse to [http://localhost:8080/](http://localhost:8080/).

```shell
npm install
npm start
```

## From scratch

Open up a shell and type the following commands.

The first command creates a new node project.

The second command installs the development dependencies.
These are the tools that are used to build and run the application.

The third command installs react and react-dom, these are the libraries used to create the application.

The fourth command creates the needed files for the application.

```shell
npm init -y
npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react
npm install --save react react-dom
touch webpack.config.js .babelrc index.html index.js
```

Webpack is configured in webpack.config.js.

```js
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
```

Babel is configured in .babelrc.

```
{
    "presets": [
        "es2015",
        "react"
    ]
}
```

Start script in package.json to start the application.

```json
"scripts": {
    "start": "webpack-dev-server --progress -d --colors"
}
```

Basic html page to get our site going in index.html.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>demo1</title>
</head>

<body>
    <div id="root" />
    <script src="bundle.js" type="text/javascript"></script>
</body>

</html>
```

The actual "hello world" using react in index.js.

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, Sirus!</h1>,
  document.getElementById('root')
);
```