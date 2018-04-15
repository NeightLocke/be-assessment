const UserCtrl = require('./user.controller');
const PolicyCtrl = require('./policy.controller');

const userCtrl = new UserCtrl();
const policyCtrl = new PolicyCtrl();

module.exports = {
  userCtrl,
  policyCtrl,
};
