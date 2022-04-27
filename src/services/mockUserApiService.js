import MockApiService from "./mockApiService";

class MockUserApiService  extends  MockApiService {
  constructor(controller) {
    super(controller)
    this.companies = []
    this.counter = 1
  }
  async login(username, password) {
    let user = this.listed.find(x => x.username == username && x.password == password)
    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user))
      let company = this.companies.find(x => x.id == user.id)
      return {user, company}
    }
    alert ("Ese usuario no existe")
    return;
  }

  async register(data) {
    let userExists = this.listed.find(x => x.username == data.username)
    if (userExists) {
      alert("Este usuario existe")
      return false;
    }
    data["id"] = this.counter
    let newUser = {username: data.username, password: data.password, id: data.id}
    this.listed.push(newUser)
    delete data.username
    delete data.password
    this.companies.push(data)
    this.counter += 1

    return true
  }

  async me() {
    return localStorage.getItem("userInfo") ?? this.listed[0]
  }
}

export default MockUserApiService