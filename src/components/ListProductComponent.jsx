import React from "react";
import ProductService from "../services/ProductService";

class ListProductComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.addProduct = this.addProduct.bind(this)
    }


    componentDidMount() {

        //console.log('Opa');
        ProductService.getProducts().then(res => {
            console.log(res.data)
            this.setState({ products: res.data })
        })

    }

    addProduct(){
       // alert('Opa')
       this.props.history.push('/add-product')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Produtos</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addProduct}>Novo Produto</button>
                </div>
                <hr />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(product =>

                                    <tr>
                                        <td>{product.codigo}</td>
                                        <td>{product.nome}</td>
                                        <td>{product.descricao}</td>
                                        <td>Ações</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ListProductComponent;