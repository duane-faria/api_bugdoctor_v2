const Sequelize = require('sequelize');
const Model = require('sequelize').Model;

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, allowNull: false },
        team_id: { type: Sequelize.INTEGER, allowNull: false },
      },
      {
        tableName: 'projects',
        sequelize
      }
    );

    return this;
  }
}

module.exports = Project;
