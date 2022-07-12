import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaService from './services/ListaService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Opa from './components/Opa';
const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(<div>
  <Opa name="Opa passando pela props" />
</div>
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
