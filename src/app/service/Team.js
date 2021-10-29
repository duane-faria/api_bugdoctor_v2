const teamRepository = require('../repository/Team');
const crypto = require("crypto");
class TeamService {
  async isCodeValid(code) {
    return !!(await teamRepository.findOne({
      code
    }));
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
