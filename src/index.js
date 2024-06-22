import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css"; 
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './components/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={'loading'} persistor={persistor}>
        <React.StrictMode>
           <App />
        </React.StrictMode>
        </PersistGate>
    </Provider>
);


