import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Minimal Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

// Hot module replacing without page refresh
module.hot.accept();
