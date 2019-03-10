const jwt = require('jsonwebtoken');


const createToken = {
  token(user, secretKey) {
    const authToken = jwt.sign(
      user, secretKey,
      { expiresIn: '24h' },
    );
    return authToken;
  },

};

module.exports = createToken;
