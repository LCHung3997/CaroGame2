import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/indexReducers'
import './css/index.css';
import MapApp from './containers/MapApp'
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <MapApp />
  </Provider>,
  document.getElementById('root')
)