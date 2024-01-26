import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store,persistor} from './components/Store/store';
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={'loading'} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
);


