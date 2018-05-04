// 2018.05.03 Jongkook

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';
import * as actions from './actions';

/**
 * Store : dispatch(action)
 *          getState
 *          subscribe(listener)
 *          replaceReducer(nextReducer)
 */
const store = createStore(reducers);
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200,200,200]));

unsubscribe();

store.dispatch(actions.setColor([100,100,100]));

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);