const { User } = require('../models');
const { hashPassword, comparePassword } = require('../libs/password');
const jwt = require('jsonwebtoken');

class AuthService {
  async login(email, password) {
    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) throw new Error('User not found');

    const isValid = await comparePassword(password, user.password);

    if (!isValid) throw new Error('Invalid password');

    const token = await this.generateJwtToken(user);

    return {
      user,
      token
    };
  }

  async generateJwtToken(user) {
    const token = jwt.sign({
      id: user.id,
      email: user.email,
      name: user.name
    }, process.env.JWT_TOKEN, {
      expiresIn: '2h'
    });

    return token;
  }
}

module.exports = AuthService;