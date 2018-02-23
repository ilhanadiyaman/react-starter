import React from 'react';
import ReactDOM from 'react-dom';

import '../public/css/main.css';

const title = 'Minimal Setup';

ReactDOM.render(<div>{title}</div>, document.getElementById('root'));

// Hot module replacing without page refresh
if (module.hot) {
  module.hot.accept();
}
