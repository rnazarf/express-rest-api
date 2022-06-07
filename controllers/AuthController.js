const AuthService = require('@services/AuthService');
const authService = new AuthService();
const { successRes, errorRes } = require('@common/response');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const { user, token } = await authService.login(email, password);
      return successRes(res, { user, token });
    } catch (error) {
      return errorRes(res, error, error.message);
    }
  }
}

module.exports = AuthController;