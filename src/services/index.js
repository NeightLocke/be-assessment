const UserService = require('./user.service');
const PolicyService = require('./policy.service');

const userService = new UserService();
const policyService = new PolicyService();

module.exports = {
  userService, policyService,
};
