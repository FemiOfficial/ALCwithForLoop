const bcrypt = require('bcrypt');

const hashPassword = (pwd) => {
  const salt = bcrypt.genSaltSync(15);
  const password = bcrypt.hashSync(pwd, salt);
  return password;
};

module.exports = hashPassword;
