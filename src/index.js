import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';


import reducer from './store/reducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux'; // which is used to connnect react and central store
let appStore = createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={appStore}>
            <App />
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();