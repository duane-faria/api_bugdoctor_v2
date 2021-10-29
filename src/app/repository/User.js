const models = require('../model');
const Repository = require('./Repository');

class UserRepository extends Repository {
  constructor() {
    super(models.User);
  }
}

module.exports = new UserRepository();
