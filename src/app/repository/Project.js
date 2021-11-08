const models = require('../model');
const Repository = require('./Repository');

class ProjectRepository extends Repository {
  constructor() {
    super(models.Project)
  }

}

module.exports = new ProjectRepository();
