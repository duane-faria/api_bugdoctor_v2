const Sequelize = require('sequelize');
const Model = require('sequelize').Model;
class Team extends Model {
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
        code: { type: Sequelize.STRING, allowNull: false },
      },
      {
        tableName: 'teams',
        sequelize
      }
    );

    return this;
  }
}

module.exports = Team;
