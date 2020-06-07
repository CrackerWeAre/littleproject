import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import App from './components/App'

import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

const { store, persistor } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate lodaing={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.querySelector('#root')
)

