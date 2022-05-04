import MockApiService from "./mockApiService";

class MockUserApiService  extends  MockApiService {
  constructor(controller) {
    super(controller)
  }
  async login(username, password) {
    let user = this.listed.find(x => x.username == username && x.password == password)
    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user))
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