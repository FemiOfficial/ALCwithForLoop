import UserSerivces from '../services/UserServices';

const UserControllers = {
  async createUser(req, res) {
    try {
      const error = [];
      const user = req.body;
      if (!user.firstname) {
        error.push({ msg: 'firstname is required' });
      }
      if (!user.lastname) {
        error.push({ msg: 'lastname is required' });
      }
      if (!user.email) {
        error.push({ msg: 'email is required' });
      }
      if (!user.password) {
        error.push({ msg: 'password is required' });
      }
      if (!user.address) {
        error.push({ msg: 'address is required' });
      }
      if (!user.phoneNumber) {
        error.push({ msg: 'phoneNumber is required' });
      }

      if (error.length > 0) {
        return res.status(400).json(
          {
            msg: 'failed',
            error,
          },
        );
      }
      const newUser = await UserSerivces.createUser(user);
      return res.status(200).json(
        {
          msg: 'User registered successfully',
          newUser,
        },
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async loginUser(req, res) {
    try {
      const login = req.body;
      const error = [];
      if (!login.email) {
        error.push({ msg: 'email is required' });
      }
      if (!login.password) {
        error.push({ msg: 'password is required' });
      }
      if (error.length > 0) {
        return res.status(400).json(
          {
            msg: 'failed',
            error,
          },
        );
      }
      const authUser = await UserSerivces.loginUser(login);
      return res.status(200).json(
        {
          authUser,
        },
      );
    } catch (error) {
      return res.status(404).json({ error: 'Invalid email or password' });
    }
  },
};
module.exports = UserControllers;
