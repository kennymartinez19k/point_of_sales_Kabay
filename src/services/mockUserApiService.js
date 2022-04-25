import MockApiService from "./mockApiService";

class MockUserApiService  extends  MockApiService {
  constructor(controller) {
    super(controller)
    this.listed = [
      {
        id: 1,
        shopName: "Wisl",
        shopContactNumber: "",
        shopContactEmail: "string",
        shopContactAddress: "string",
        currencySymbol: "string",
        shopTaxInPercentage: 0,
        user: "wilson1",
        password: "12345"
      },
      {
        id: 2,
        shopName: "Wisl",
        shopContactNumber: "",
        shopContactEmail: "string",
        shopContactAddress: "string",
        currencySymbol: "string",
        shopTaxInPercentage: 0,
        user: "wilson2",
        password: "4567"
      }
    ]
    this.counter = 1
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
}

export default MockUserApiService