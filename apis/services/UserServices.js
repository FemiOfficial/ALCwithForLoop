import database from '../db/models';
import hashPassword from '../utils/hash.password';
import createToken from '../utils/createToken';
import validPassword from '../utils/validPassword';

const keys = require('../config/keys');

const UserSerivces = {
  async createUser(user) {
    // eslint-disable-next-line no-param-reassign
    user.roleId = user.roleId ? user.roleId : 3;
    const Role = await database.Role.findById(user.roleId);

    // eslint-disable-next-line no-param-reassign
    user.permission = Role.permission;
    // eslint-disable-next-line no-param-reassign
    user.password = hashPassword(user.password);
    const createUser = await database.User.create(user);
    return createUser;
  },
  async loginUser(loginUser) {
    const error = [];
    let response = { value: 'any' };
    const user = await database.User.findOne({ where: { email: loginUser.email } });
    if (!user) {
      throw new Error('Wrong credentials');
    } else if (!validPassword(loginUser.password, user.password)) {
      throw new Error('invalid password');
    } else {
      const authUser = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        permission: user.permission,
      };
      const authToken = `Bearer ${createToken.token(authUser, keys.secretOrKey)}`;
      response = {
        msg: 'User logged in success',
        user,
        token: authToken,
      };
    }
    if (error.length > 0) {
      return error;
    }
    return response;
  },
};

module.exports = UserSerivces;
