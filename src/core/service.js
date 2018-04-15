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
   * Este metodo se encarga de devolver todos los datos que coinciden
   * con un par nombre/valor encontrados en el conjunto de datos
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
   * Este metodo se encarga de devolver el primer elemento contenido en el conjunto
   * de todos los datos que coinciden con un par nombre/valor encontrados a traves de la
   * funcion getFiltered
   * @param {String} propertyName
   * @param {String} propertyValue
   */
  async getOneFiltered(propertyName, propertyValue) {
    const content = await this.getFiltered(propertyName, propertyValue);
    return content && content.length > 0 ? content[0] : undefined;
  }
}

module.exports = Service;
