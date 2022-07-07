import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//const nome = <h1>OPA, {nome} </h1>



function Opa(props) {
  return <h1>Opa, {props.name} {props.title} </h1>
}
/*
function BoasVindas(props) {
  return <Opa name= {props.name} title={props.title}>teste</Opa>
}
*/

class BoasVindas extends React.Component {

  render() {

    return <div>
      <h1>OPAs, {this.props.name}</h1>
    </div>

  }

}


root.render(
  <div>
    <Opa name='teste'></Opa>
    <BoasVindas name='Maria'>teste 567</BoasVindas>
    <BoasVindas></BoasVindas>
    <BoasVindas></BoasVindas>
    <BoasVindas></BoasVindas>
  </div>

);

/*
function tick() {
  const element = (
    <div>
      <h1>Olá, Leonardo!</h1>
      <h2>Hora agora: {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
