const Controller = require('../core/controller');
const Roles = require('../core/roles');
const { policyService } = require('../services');
const { userService } = require('../services');

module.exports = class PolicyCtrl extends Controller {
  async getPoliciesByName(req, res) {
    if (this.checkAuthorization([Roles.User, Roles.Admin], req, res)) {
      try {
        const userResult = await userService.getOneFiltered('name', req.params.name);
        if (!userResult) {
          res.status(404)
            .json({ message: 'User not found' });
          return;
        }
        const result = await policyService.getFiltered('clientId', userResult.id);
        if (!result) {
          res.status(404)
            .json({ message: 'Not found' });
        } else {
          res.status(200)
            .json(result);
        }
      } catch (ex) {
        res.status(500)
          .json({ message: 'Internal Error' });
      }
    }
  }

  async getUserByPolicy(req, res) {
    if (this.checkAuthorization([Roles.User, Roles.Admin], req, res)) {
      try {
        const policyResult = await policyService.getOneFiltered('id', req.params.id);
        if (!policyResult) {
          res.status(404)
            .json({ message: 'Policy not found' });
          return;
        }
        const userResult = await userService.getOneFiltered('id', policyResult.clientId);
        if (!userResult) {
          res.status(404)
            .json({ message: 'Not found' });
        } else {
          res.status(200)
            .json(userResult);
        }
      } catch (ex) {
        res.status(500)
          .json({ message: 'Internal Error' });
      }
    }
  }

  async getAll(req, res) {
    if (this.checkAuthorization([Roles.User, Roles.Admin], req, res)) {
      try {
        const result = await policyService.getAll();
        res.status(200)
          .json(result);
      } catch (ex) {
        res.status(500)
          .json({ message: 'Internal Error' });
      }
    }
  }
};
