import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaService from './services/ListaService';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Lista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lista: []
    }
  }

  componentDidMount(){

    var temp = ListaService.getLista().then((res) => {
    
      if(res.state == 200)
      this.setState({lista: res.data})
      console.log(res.status)
      console.log(res.data)
    })
    
    console.log(this.state.lista)
  }

  render() {
    return (
      <div>
        <h2>Opa! Lista de Produtois</h2> 
        <ul>
          { this.state.lista.map((produto) => <li key={produto.codigo}>{produto.codigo} - {produto.nome}</li>) }
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
