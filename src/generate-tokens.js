const users = require('./security/profiles.mock.json');
const AuthProvider = require('./security/auth-provider');
const logger = require('./core/logger');

const authProvider = new AuthProvider();
for (let i = 0; i < users.length; i += 1) {
  const user = users[i];
  const token = authProvider.createToken(user);
  logger.info(`Token for a user with role ${user.role}:`);
  logger.info(token);
}
