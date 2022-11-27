import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegistrarPagina from './screens/Registrar/RegistrarPagina';
import PrincipalPagina from './screens/Principal/PrincipalPagina';
import Newsletter from './screens/Principal/components/Newsletter';
import ResenaPagina from './screens/Resena/ResenaPagina';
import Resenas from './screens/Resena/components/Resenas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResenaPagina></ResenaPagina>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
