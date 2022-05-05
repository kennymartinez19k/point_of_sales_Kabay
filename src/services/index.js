import productDummy from './dataDummies/productDummie'
import companyDummy from './dataDummies/companyDummie'
import userDummy from './dataDummies/userDummie'
import MockApiService from './mockApiService'
import MockUserApiService from './mockUserApiService'
import BaseApiService from './baseApiService'
const services = {
    product: new MockApiService("product", productDummy ),
    user: new MockUserApiService("user", userDummy),
    company: new MockApiService("company", companyDummy),
    expensive: new BaseApiService("expense"),
    provider: new BaseApiService("supplier"),
}

export default services

