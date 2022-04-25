import MockApiService from './mockApiService'
import MockUserApiService from './mockUserApiService'
import UserApiService from './userApiService'
// import BaseApiService from './baseApiService'
const services = {
    product: new MockApiService("product"),
    user: new MockUserApiService("user"),
}

export default services