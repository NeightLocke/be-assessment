const Service = require('../core/service');

class UserService extends Service {
  constructor() {
    super('http://www.mocky.io/v2/5808862710000087232b75ac', 'clients');
  }
}

module.exports = UserService;

