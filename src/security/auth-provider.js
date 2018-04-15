const jwt = require('jsonwebtoken');
const uuid = require('uuid');

/**
 * Provider for the Authorization.
 * Warning: this is not a full authorization provider, it's only the minimum
 * needed for the authorization system asked in the requirements of the
 * assessment.
 */
class AuthProvider {
  /**
   * Constructor of the class.
   */
  constructor() {
    this.issuer = 'Backend Assesment';
    this.audience = '*';
    this.secret = 'la-vida-es-una-lenteja-o-la-tomas-o-la-dejas';
    this.expirationSpan = 60 * 60;
  }

  /**
   * Generate a unique JWT id so not two equal jwt tokens are generated.
   */
  generateJti() {
    return uuid.v4();
  }

  /**
   * Generates a new token.
   * @param {object} user User that will be in the payload.
   * @param {string} scope Scope for the payload.
   */
  createToken(user, scope = 'full_access') {
    const payload = {
      iss: this.issuer,
      aud: this.audience,
      exp: Math.floor(Date.now() / 1000) + this.expirationSpan,
      scope,
      sub: user.email,
      jti: this.generateJti(),
      alg: 'HS256',
      role: user.role,
    };
    return jwt.sign(payload, this.secret);
  }

  /**
   * Verify a given token and extract the payload.
   * @param {string} token
   */
  verifyToken(token) {
    const payload = jwt.verify(token, this.secret);
    if (!payload) {
      throw new Error('Invalid JWT token');
    }
    if (!payload.iss || payload.iss !== this.issuer) {
      throw new Error('Invalid Issuer at JTW token');
    }
    return payload;
  }
}

module.exports = AuthProvider;
