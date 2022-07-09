import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Lista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dados: [{
        "cep": "20260-080",
        "logradouro": "xpto",
        "complemento": "até 392/393",
        "bairro": "1",
        "localidade": "Curitiba",
        "uf": "RJ"
      }, {
        "cep": "20260-080",
        "logradouro": "xpto 01",
        "complemento": "até 392/393",
        "bairro": "2",
        "localidade": "Curitiba",
        "uf": "RJ"
      }, {
        "cep": "20260-080",
        "logradouro": "xpto 02",
        "complemento": "até 392/393",
        "bairro": "3",
        "localidade": "Curitiba",
        "uf": "RJ"
      }]
    }
  }

  render() {
    return (
      <div>
        <h2>Opa</h2> 
        <ul>
          {this.state.dados.map((endereco) => <li key={endereco.bairro}>{endereco.logradouro} {endereco.cep}</li>)}
        </ul>
      </div>
    )
  }
}


root.render(
  <Lista />
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
