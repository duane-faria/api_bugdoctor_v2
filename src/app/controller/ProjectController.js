const projectService = require('../service/Project');

class ProjectController {
  async index(req, res) {
    const data = await projectService.getProjectsByTeam(req.params.team_id);

    return res.json({
      status: 200,
      data
    });
  }

  async store(req, res) {
    const data = await projectService.create(req.body);

    return res.json({
      status: 200,
      data
    });
  }
}
module.exports = new ProjectController();
