import axios from 'axios'
import API_HOST from '../constants'

class MockApiService {
  constructor(controller) {
    this.controller = controller
    this.products = []
    this.counter = 1
  }
  async getAll(templateFn = null, config = null) {
    
    let listed = []
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      if (templateFn) listed.push(templateFn(element))
      else listed.push(element)
    }
    return listed
  }

  async get(id, templateFn = null, config = null) {
    let product =  this.products.find(x => x.id == id)
    if (templateFn) return templateFn(product)
    else return product
  }

  async create(data, config = null) {
    data.id = this.counter
    this.counter += 1
    this.products.push(data)
  }

  async update(id, data, config = null) {
    let productIndex = this.products.findIndex(x => x.id == id)
    if (productIndex > -1) {
        this.products[productIndex] = data
    }
  }

  async delete(id, config = null) {
    let productIndex = this.products.findIndex(x => x.id == id)
    this.products.splice(productIndex, 1)
  }
}

export default MockApiService