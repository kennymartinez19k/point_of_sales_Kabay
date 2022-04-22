import axios from 'axios'
import API_HOST from '../constants'

class BaseApiService {
  constructor(controller) {
    this.controller = controller
  }
  async getAll(templateFn = null, config = null) {
    let response =  await axios.get(`${API_HOST}/api/${this.controller}`, config)
    let listed = []
    for (let index = 0; index < response.data.length; index++) {
      const element = response.data[index];
      if (templateFn) listed.push(templateFn(element))
      else listed.push(element)
    }
    return listed
  }

  async get(id, templateFn = null, config = null) {
    let response =  await axios.get(`${API_HOST}/api/${this.controller}/${id}`, config)
    if (templateFn) return templateFn(response.data)
    else return response.data
  }

  async create(data, config = null) {
    return await axios.post(`${API_HOST}/api/${this.controller}`, data, config)
  }

  async update(id, data, config = null) {
    return await axios.put(`${API_HOST}/api/${this.controller}/${id}`, data, config)
  }

  async delete(id, config = null) {
    return await axios.delete(`${API_HOST}/api/${this.controller}/${id}`, config)
  }
}

export default BaseApiService