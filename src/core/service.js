const request = require('request-promise');

class Service {
  /**
   * Constructor of the class.
   */
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }

  async getAll() {
    const content = await request.get({ url: this.url, json: true });
    return content[this.name];
  }

  /**
   * This method returns an array of objects
   * whose attribute “propertyName” is equal to “propertyValue”
   * @param {String} propertyName
   * @param {String} propertyValue
   */
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

  /**
   * This method returns the first element of an array
   * whose attribute “propertyName” is equal to “propertyValue”
   * @param {String} propertyName
   * @param {String} propertyValue
   */
  async getOneFiltered(propertyName, propertyValue) {
    const content = await this.getFiltered(propertyName, propertyValue);
    return content && content.length > 0 ? content[0] : undefined;
  }
}

module.exports = Service;
