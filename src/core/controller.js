const { authProvider } = require('../security');
const logger = require('./logger');

class Controller {
  checkAuthorization(roles, req, res) {
    if (!roles || roles.length === 0) {
      return true;
    }
    if (!req.headers || !req.headers.authorization) {
      res.status(401).send('Authorization header not found');
      return false;
    }
    const tokens = req.headers.authorization.split(' ');
    if (tokens.length !== 2 || tokens[0] !== 'Bearer') {
      res.status(401).send('Invalid Authorization token');
      return false;
    }
    try {
      const payload = authProvider.verifyToken(tokens[1]);
      logger.info(payload);
      logger.info(roles);
      if (roles.indexOf(payload.role) !== -1) {
        return true;
      }
      res.status(401).send('You are not allowed to access');
      return false;
    } catch (error) {
      res.status(401).send('Invalid authorization');
      return false;
    }
  }
}

module.exports = Controller;
