const userService = require('../service/User');

class UserController {
  async index(req, res) {
    const user = await userService.findUsersByTeam(req.params.team_id);
    return res.json({ status: 200, data: user });
  }

  async store(req, res) {
    const user = await userService.create(req.body);
    return res.json({ status: 200, data: user });
  }

  async validateEmail(req, res) {
    const REGISTERING = false;
    const valid = await userService.validateEmail(req.params.email, REGISTERING);
    return res.json({ status: 200, data: { valid } });
  }
}

module.exports = new UserController();
