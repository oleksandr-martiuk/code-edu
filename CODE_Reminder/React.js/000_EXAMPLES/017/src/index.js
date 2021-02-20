import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App/App';

const title = 'React Webpack Babel Setup';

ReactDOM.render(
   <App title={title} />,
   document.getElementById('root')
);

module.hot.accept();
