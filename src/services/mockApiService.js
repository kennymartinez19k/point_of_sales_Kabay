class MockApiService {
  constructor(controller, initialData = []) {
    this.controller = controller
    this.listed = initialData
    this.counter = 1
  }
  async getAll(templateFn = null, config = null) {
    
    let listed = []
    for (let index = 0; index < this.listed.length; index++) {
      const element = this.listed[index];
      if (templateFn) listed.push(templateFn(element))
      else listed.push(element)
    }
    return listed
  }

  async get(id, templateFn = null, config = null) {
    let item =  this.listed.find(x => x.id == id)
    if (templateFn) return templateFn(item)
    else return item
  }

  async create(data, config = null) {
    data.id = this.counter
    this.counter += 1
    this.listed.push(data)
  }

  async update(id, data, config = null) {
    let itemIndex = this.listed.findIndex(x => x.id == id)
    if (itemIndex > -1) {
        this.listed[itemIndex] = data
    }
  }

  async delete(id, config = null) {
    let itemIndex = this.listed.findIndex(x => x.id == id)
    this.listed.splice(itemIndex, 1)
  }
}

export default MockApiService