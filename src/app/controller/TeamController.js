const teamService = require('../service/Team');

class TeamController {

  async validateCode(req, res) {
    const isValid = await teamService.isCodeValid(req.params.code);

    return res.json({
      status: 200,
      data: {
        isCodeValid: isValid
      }
    })
  }

  async index(req, res) {
    const users = await User.findAll({
      attributes: ['name', 'email',],
    });
    return res.json(users);
  }

  async store(req, res) {
    const teamPayload = await teamService.create(req.body);

    return res.json({
      status: 200,
      data: teamPayload
    });
  }
}

module.exports = new TeamController();
