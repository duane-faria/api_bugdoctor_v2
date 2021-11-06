const userService = require('../service/User');

class SessionController {
  async store(req, res) {
    const data = await userService.login(req.body);

    return res.json({
      status: 200,
      data
    });
  }
}
module.exports = new SessionController();
