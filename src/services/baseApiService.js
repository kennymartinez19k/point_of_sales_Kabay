import axios from 'axios'
import API_HOST from '../constants'

class BaseApiService {
  constructor(controller) {
    this.controller = controller
    this.currentProduct = null

  }
  
  async getAll(templateFn = null, config = null) {
    console.log(`${API_HOST}/api/${this.controller}`)
    let response =  await axios.get(`${API_HOST}/api/${this.controller}`, config)
    if (response.status == 404) {
      alert("Error no se pudo conectar con el backend")
      return []
    }
    let listed = []
    for (let index = 0; index < response.data.length; index++) {
      const element = response.data[index];
      if (templateFn) listed.push(templateFn(element, index))
      else listed.push(element)
    }
    return listed
  }

  async get(id, templateFn = null, config = null) {
    let response =  await axios.get(`${API_HOST}/api/${this.controller}/${id}`, config)
    if (response.status == 404) {
      alert("Error no se pudo conectar con el backend")
      return null
    }
    if (templateFn) return templateFn(response.data)
    else return response.data
  }

  async create(data, config = null) {
    console.log(data, 'Im the data')
    return await axios.post(`${API_HOST}/api/${this.controller}`, data, config)
  }
  async setProduct(data) {
    this.currentProduct = data
  }
  async getProduct() {
    return this.currentProduct
  }

  async update(id, data, config = null) {
    return await axios.put(`${API_HOST}/api/${this.controller}/${id}`, data, config)
  }

  async delete(id, config = null) {
    return await axios.delete(`${API_HOST}/api/${this.controller}/${id}`, config)
  }
}

export default BaseApiService