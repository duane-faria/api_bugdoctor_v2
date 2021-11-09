const bugService = require('../service/Bug');
const models = require('../model');

class BugController {
  async index(req, res) {
    const { team_id } = req.params;
    const data = await bugService.getBugsByProject(team_id);
    return res.json({ code: 200, data })
  }

  async show(req, res) {
    const { id } = req.params;
    const data = await bugService.findOne({
      where: { id },
      include: [{
        model: models.User,
        as: 'reporter',
        attributes: ['id', 'name']
      }, {
        model: models.User,
        as: 'responsible',
        attributes: ['id', 'name']
      },
      ],
    });
    return res.json({ code: 200, data })
  }

  async store(req, res) {
    const { body: bug } = req;
    const data = await bugService.create(bug);
    return res.json({ code: 200, data })
  }

  async update(req, res) {
    const { body: bug } = req;
    const data = await bugService.update(bug);
    return res.json({ code: 200, data })
  }

  async delete(req, res) {
    const data = await bugService.delete(req.params.id);
    return res.json({ code: 200, data })
  }
}
module.exports = new BugController();
