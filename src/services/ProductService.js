import axios from 'axios'

const BASE_URL =  "https://app-node-br.herokuapp.com/prd"

class ProductService{

    getProducts(){
        
        return axios.get(BASE_URL)

    }

}

export default new ProductService()