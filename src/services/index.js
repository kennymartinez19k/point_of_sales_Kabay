import productDummy from './dataDummies/productDummie'
import companyDummy from './dataDummies/companyDummie'
import expensiveDummy from './dataDummies/expensiveDummie'
import postDummy from './dataDummies/postDummie'
import MockApiService from './mockApiService'
import MockUserApiService from './mockUserApiService'
// import UserApiService from './userApiService'
import BaseApiService from './baseApiService'
const services = {
    product: new MockApiService("product", productDummy ),
    user: new MockUserApiService("user"),
    company: new MockApiService("company", companyDummy),
    expensive: new BaseApiService("expensive"),
    postProducts: new MockApiService("expensive", postDummy),
}

export default services

