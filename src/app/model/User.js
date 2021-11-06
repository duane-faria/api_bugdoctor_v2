const Sequelize = require('sequelize');
const Model = require('sequelize').Model;
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        team_id: Sequelize.NUMBER,
        password: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }

  static associate(models) {
    this.belongsTo(models.Team);
  }
}

module.exports = User;
