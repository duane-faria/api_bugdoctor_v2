const bugService = require('../service/Bug');

class BugController {
  async index(req, res) {
    const { team_id } = req.params;
    const data = await bugService.getBugsByProject(team_id);
    return res.json({ code: 200, data })
  }

  async store(req, res) {
    const { body: bug } = req;
    const data = await bugService.create(bug);
    return res.json({ code: 200, data })
  }

  async delete(req, res) {
    const data = await bugService.delete(req.params.id);
    return res.json({ code: 200, data })
  }
}
module.exports = new BugController();
