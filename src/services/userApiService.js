import axios from 'axios'
import API_HOST from '../constants'
import BaseApiService from './baseApiService'

class UserApiService extends BaseApiService {
  constructor(controller) {
    super(controller)
    this.controller = controller
  }
  async login(username, password) {
    let response =  await axios.post(`${API_HOST}/api/user/login`, {username: username, password: password}, config)
    if (response.status == 200) {
      localStorage.setItem("userInfo", JSON.stringify(response.data))
      return true
    }
    alert ("Ese usuario no existe")
    return false
  }

  async register(data) {
    let response =  await axios.post(`${API_HOST}/api/user/register`, data, config)
    if (response.status == 200){
      return true
    }
    alert(response.message)
  }

  async me() {
    return localStorage.getItem("userInfo")
  }
  
}

export default UserApiService