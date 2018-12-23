import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import axios from "axios";
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://localhost:1337';

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


