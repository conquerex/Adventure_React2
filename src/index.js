// 2018.05.03 Jongkook

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'

/**
 * Store : dispatch(action)
 *          getState
 *          subscribe(listener)
 *          replaceReducer(nextReducer)
 */
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);