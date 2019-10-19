import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/indexReducers'
import './css/index.css';
import Game from './Game'
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)