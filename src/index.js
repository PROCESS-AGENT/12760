import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListaService from './services/ListaService';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Opa extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lista: []
    }
  }

  componentDidMount(){

    var temp = ListaService.getLista().then((res) => {
    
      //console.log(res)
      if(res.status == 200)
      this.setState({lista: res.data})
      
    })
    
    
  }

  render() {
    return (
      <div className='teste'>
        <h2>Opa! Lista de Produtos</h2> 
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
