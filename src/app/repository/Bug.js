const models = require('../model');
const Repository = require('./Repository');

class BugRepository extends Repository {
  constructor() {
    super(models.Bug)
  }

  getBugsByProject(project_id) {
    return this.findAll({
      where: {
        project_id
      },
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
    })
  }

  getBugsByTeam(team_id) {
    return this.findAll({
      include: [{
        model: models.User,
        as: 'reporter',
        where: {
          team_id
        },
        attributes: ['id', 'name']
      }, {
        model: models.User,
        as: 'responsible',
        attributes: ['id', 'name']
      },
      ],
    })
  }
}

module.exports = new BugRepository();
