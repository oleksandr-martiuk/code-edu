import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App/App';

const title = 'React App';

ReactDOM.render(
   <App title={title} />,
   document.getElementById('root')
);

module.hot.accept();
