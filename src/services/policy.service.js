const Service = require('../core/service');

class PolicyService extends Service {
  constructor() {
    super('http://www.mocky.io/v2/580891a4100000e8242b75c5', 'policies');
  }
}

module.exports = PolicyService;
