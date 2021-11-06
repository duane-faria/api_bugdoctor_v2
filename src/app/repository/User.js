const models = require('../model');
const Repository = require('./Repository');

class UserRepository extends Repository {
  constructor() {
    super(models.User);
  }

  findUsersByTeam(team_id) {
    return this.findAll({
      where: {
        team_id
      },
      attributes: {
        exclude: ['password', 'deletedAt', 'updatedAt', 'createdAt', 'TeamId']
      }
    })
  }
}

module.exports = new UserRepository();
