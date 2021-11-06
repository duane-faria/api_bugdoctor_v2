const teamRepository = require('../repository/Team');
const crypto = require("crypto");
const { get } = require('lodash');
class TeamService {
  async isCodeValid(code) {
    const team = await teamRepository.findOne({
      code
    });

    return {
      isCodeValid: get(team, 'id') ? true : false,
      teamId: get(team, 'id', null)
    }
  }

  findOne(id) {
    return teamRepository.findOne({ id });
  }

  async create(team) {
    let code;
    do {
      code = crypto.randomBytes(2).toString('hex');
    } while (!!(await teamRepository.findOne({ code })))

    return teamRepository.create({ ...team, code });
  }
}

module.exports = new TeamService();
