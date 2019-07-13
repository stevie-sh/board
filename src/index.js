import React from 'react';
import ReactDOM from 'react-dom'
import Matrix from './Matrix';
import { createStore } from 'redux'

console.log('bootstrap script has loaded');

const rootElement = document.getElementById('root');


const store = createStore();

const render = () =>  ReactDOM.render(
  <>
    <h1>Redux Board</h1>
    <Matrix value={store.getStore()}/> 
  </>
  ,
  rootEl
);

render();


