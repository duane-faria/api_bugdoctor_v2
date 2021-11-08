const Service = require('./Service');
const bugRepository = require('../repository/Bug');

class BugService extends Service {
  constructor() {
    super(bugRepository)
  }

  getBugsByTeam(team_id) {
    return this.repository.getBugsByTeam(team_id);
  }

  getBugsByProject(project_id) {
    return this.repository.getBugsByProject(project_id);
  }
}

module.exports = new BugService();
