import React from  "react";

export default class HeaderComponent extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">Gestão de Produtos</a></div>
                </nav>
                </header>

            </div>
        )
    }

}
//export default HeaderComponent;