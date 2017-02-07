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
