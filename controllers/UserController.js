const UserService = require("../services/UserService");
const userService = new UserService();
const { UserCreatePayloadSchema, UserUpdatePayloadSchema } = require("../validator/UserRequestValidator");
const { errorRes, successRes } = require("../common/response");

class UserController {
  async getAllUser(req, res) {
    try {
      const { limit, offset } = req.query;
      const users = await userService.getAllUser(limit, offset);
      return successRes(res, users);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      return successRes(res, user);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async addUser(req, res) {
    try {
      const validate = UserCreatePayloadSchema.validate(req.body);

      if (validate.error) return errorRes(res, validate.error);

      const user = await userService.addUser(validate.value);
      return successRes(res, user);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async updateUser(req, res) {
    try {
      const validate = UserUpdatePayloadSchema.validate(req.body);

      if (validate.error) return errorRes(res, validate.error.message, 'Invalid payload', 400);

      const user = await userService.updateUser(req.params.id, validate.value);

      if (!user) {
        throw new Error("Failed to update user");
      }

      return successRes(res, user);
    } catch (error) {      
      return errorRes(res, error, error.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userService.deleteUser(req.params.id);

      if (!user) {
        throw new Error("Failed to delete user");
      }

      return successRes(res, user);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }

  async updatePassword(req, res) {
    try {
      const user = await userService.updatePassword(req.params.id, req.body);

      if (!user) {
        throw new Error("Failed to update password");
      }

      return successRes(res, user);
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }
  
}

module.exports = UserController;