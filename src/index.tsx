import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'mdb-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { applyMiddleware, createStore } from 'redux';
import reducer from './config/store/reducer';
import { Provider } from 'react-redux';
import Loading from './components/Loading';

const store = createStore(reducer, applyMiddleware());
const App = React.lazy(() => import('./App'))

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading/>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
