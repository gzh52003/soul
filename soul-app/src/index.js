import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {routes} from './router'
import {renderRoutes} from 'react-router-config'
import {HashRouter,BrowserRouter} from 'react-router-dom'
import Provider from './store'
const Router = process.env.NODE_ENV === 'development' ?  HashRouter :BrowserRouter ;
console.dir(Provider);
ReactDOM.render(
  // <React.StrictMode>
  <Provider>
    <Router>
        <App />
      <Suspense fallback={<div>loading</div>}>
      {renderRoutes(routes)}
      </Suspense>
    </Router>
    </Provider>
 ,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
