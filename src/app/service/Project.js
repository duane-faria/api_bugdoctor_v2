const Service = require('./Service');
const projectRepository = require('../repository/Project');

class ProjectService extends Service {
  constructor() {
    super(projectRepository)
  }

  getProjectsByTeam(team_id) {
    return this.findAll({ where: { team_id } });
  }
}

module.exports = new ProjectService();
