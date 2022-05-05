import MockApiService from "./mockApiService";
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentUser } from '../actions/userAction'


class MockUserApiService  extends  MockApiService {
  constructor(controller, initialData) {
    super(controller, initialData)
  }
  async login(username, password, dispatch) {
    let user = this.listed.find(x => x.username == username && x.password == password)
    if (user) {
      dispatch(setCurrentUser(user))
      return true
    }
    alert ("Ese usuario no existe")
    return false
  }

  async register(data) {
    let user = this.listed.find(x => x.username == data.username)
    if (user) {
      alert("Este usuario existe")
      return;
    }
    this.listed.push(data)
    return true;
  }

  async me() {
    return localStorage.getItem("userInfo") ?? this.listed[0]
  }
}

export default MockUserApiService