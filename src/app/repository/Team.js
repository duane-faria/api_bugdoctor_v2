const models = require('../model');
const Repository = require('./Repository');

class TeamRepository extends Repository{
  constructor() {
    super(models.Team)
  }
}

module.exports = new TeamRepository();
