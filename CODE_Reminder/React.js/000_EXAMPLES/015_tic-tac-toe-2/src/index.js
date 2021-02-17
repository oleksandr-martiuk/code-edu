import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App/App';

const title = '"Tic Tac Toe"';

ReactDOM.render(
   <App title={title} />,
   document.getElementById('root')
);

module.hot.accept();
