const Sequelize = require('sequelize');
const Model = require('sequelize').Model;

class Bug extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        responsible_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        reporter_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        project_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'projects',
            key: 'id',
          },
        },
        enviroment: {
          type: Sequelize.ENUM('DEV', 'HOMOLOG', 'PROD'),
          allowNull: false,
        },
        priority: {
          type: Sequelize.ENUM('BAIXA', 'MEDIA', 'ALTA'),
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM('TODO', 'EM_ANDAMENTO', 'REVIEW', 'CONCLUIDO'),
          allowNull: false,
        },
      },
      { sequelize, tableName: 'bugs' }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'responsible_id',
      as: 'responsible'
    });
    this.belongsTo(models.User, {
      foreignKey: 'reporter_id',
      as: 'reporter'
    });
  }
}

module.exports = Bug;
