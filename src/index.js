import React from 'react';
import ReactDOM from 'react-dom'
import Matrix from './Matrix.js';
import rootReducer from './reducer.js';
import {Provider} from 'react-redux';
import { createStore } from 'redux'

console.log('bootstrap script has loaded');

const rootElement = document.getElementById('root');
console.log('we got rootEl', rootElement);

const store = createStore(rootReducer);

const render = () => {
    console.log('inside the lazy render');
    return (
        ReactDOM.render(
            <Provider store={store}>
                <h1>Redux Board</h1>
                <Matrix/>
            </Provider>
            ,
            rootElement
        )
    )
}

render();


