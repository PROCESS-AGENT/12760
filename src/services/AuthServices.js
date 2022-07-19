import axios from "axios"

const BASE_URL = 'https://app12759.herokuapp.com/usuarios/login'

class AuthServices {

    login(credenciais) {
       return axios.post(BASE_URL, credenciais)
    }

}

export default new AuthServices();