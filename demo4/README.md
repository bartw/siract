# Demo 4

## Intro

Demo to add routing to the presentation application.

## Quickstart

Open up a shell and type the following commands.
Go to a browser and browse to [http://localhost:8080/](http://localhost:8080/).

```shell
npm install
npm start
npm test
```

## From scratch

```shell
npm init
npm install --save-dev webpack webpack-dev-server babel-loader
npm install --save-dev babel-core babel-preset-es2015 babel-preset-react babel-plugin-transform-object-rest-spread babel-jest
npm install --save-dev react-addons-test-utils jest enzyme
npm install --save react react-dom showdown
mkdir public src src\components
touch webpack.config.js .babelrc public/index.html public/index.css src/index.js src/components/App.jsx
touch src/components/Preview.jsx src/components/ListItem.jsx src/components/List.jsx src/components/Button.jsx src/components/SidebarButtons.jsx src/components/Sidebar.jsx
touch src/components/Details.jsx src/components/Edit.jsx src/components/Presentation.jsx
```