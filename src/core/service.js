const request = require('request-promise');

class Service {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }

  async getAll() {
    const content = await request.get({ url: this.url, json: true });
    return content[this.name];
  }

  async getFiltered(propertyName, propertyValue) {
    const content = await this.getAll();
    const result = [];
    for (let i = 0; i < content.length; i += 1) {
      const item = content[i];
      if (item[propertyName] === propertyValue) {
        result.push(item);
      }
    }
    return result;
  }

  async getOneFiltered(propertyName, propertyValue) {
    const content = await this.getFiltered(propertyName, propertyValue);
    return content && content.length > 0 ? content[0] : undefined;
  }
}

module.exports = Service;
