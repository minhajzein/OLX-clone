import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './contexts/firebaseContext'
import firebase from './firebase/config'

ReactDOM.render(
    <FirebaseContext.Provider value={firebase}>
        < App />
    </FirebaseContext.Provider>,
    document.getElementById('root'));
