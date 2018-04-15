const Controller = require('../core/controller');
const Roles = require('../core/roles');
const { userService } = require('../services');

module.exports = class UserCtrl extends Controller {
  async getById(req, res) {
    if (this.checkAuthorization([Roles.User, Roles.Admin], req, res)) {
      try {
        const result = await userService.getOneFiltered('id', req.params.id);
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

  async getByName(req, res) {
    if (this.checkAuthorization([Roles.User, Roles.Admin], req, res)) {
      try {
        const result = await userService.getOneFiltered('name', req.params.name);
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

  async getAll(req, res) {
    if (this.checkAuthorization([Roles.User, Roles.Admin], req, res)) {
      try {
        const result = await userService.getAll();
        res.status(200)
          .json(result);
      } catch (ex) {
        res.status(500)
          .json({ message: 'Internal Error' });
      }
    }
  }
};
