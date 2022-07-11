import axios from 'axios'

const BASE_URL =  "https://app-node-br.herokuapp.com/prd"

class ListaService{

    getLista(){
        
        return axios.get(BASE_URL)

    }

}

export default new ListaService()