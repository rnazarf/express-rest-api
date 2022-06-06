const { User } = require('../models');
const { hashPassword, comparePassword } = require('../libs/password');

class UserService {
  async getAllUser(limit = 10, offset = 0) {
    return await User.findAndCountAll({
      limit,
      offset,
      order: [
        ['id', 'DESC']
      ],
      attributes: {
        exclude: ['password']
      }
    });
  }

  async getUserById(id) {
    return await User.findOne({
      where: {
        id
      }
    });
  }

  async addUser({ name, email, password }) {
    const isExist = await User.findOne({
      where: {
        email
      }
    });

    if (isExist) throw new Error('Email already exist');

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: await hashPassword(password),
      createdAt: new Date(),
      updatedAt: new Date()
    });

    if (!user) {
      throw new Error('Failed to create user');
    }

    return user;
  }

  async updateUser(id, { name, email, password }) {
    const user = await User.findOne({
      where: {
        id
      }
    });

    if (!user) throw new Error('User not found');

    user.name = name;
    user.email = email;
    user.password = await hashPassword(password);
    user.updatedAt = new Date();

    const save = await user.save();

    if (!save) throw new Error('Failed to update user');

    return user;
  }

  async deleteUser(id) {
    const user = await User.findOne({
      where: {
        id
      }
    });

    if (!user) throw new Error('User not found');

    const destroy = await user.destroy();

    if (!destroy) throw new Error('Failed to delete user');

    return destroy;
  }

  async updatePassword(id, { oldPassword, newPassword }) {
    const user = await User.findOne({
      where: {
        id
      }
    });

    if (!user) throw new Error('User not found');

    const isValid = await comparePassword(oldPassword, user.password);

    if (!isValid) throw new Error('Invalid password');

    user.password = await hashPassword(newPassword);
    user.updatedAt = new Date();

    const save = await user.save();

    if (!save) throw new Error('Failed to update user');

    return user;
  }
  
}

module.exports = UserService;