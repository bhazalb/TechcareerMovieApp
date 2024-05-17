import ReactDOM from 'react-dom';
import React from "react";
import { Provider } from 'react-redux';
import App from './App.jsx'; // Yolu doğru olduğundan emin olun
import './index.scss';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(   
    <Provider store={store}>     
        <App />    
   </Provider>
);