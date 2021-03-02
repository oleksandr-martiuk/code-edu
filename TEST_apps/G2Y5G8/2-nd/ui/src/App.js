import {Route, Router} from 'react-router';
import './App.css';
import { createBrowserHistory } from 'history'

import Home from "./pages/Home";

const newHistory = createBrowserHistory();

const pages = [
   {
      component: Home,
      path: '/',
   }
]

const App = () => (
   <Router history={newHistory}>
      {pages.map((page, index) =>
         <Route
            component={page.component}
            path={page.path}
            key={`page-${index}`}
         />
      )}
   </Router>
);

export default App;
