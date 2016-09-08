import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createValidatedReducer from 'redux-json-schema'
import App from './containers/App'
import reducer from './reducers'
import schemas from '../schemas'
import 'todomvc-app-css/index.css'

const store = createStore(createValidatedReducer(reducer, schemas.app, { schemas }))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
