const Sequelize = require('sequelize');
const Model = require('sequelize').Model;
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        teamId: Sequelize.NUMBER,
        password: Sequelize.STRING,
      },
      { sequelize }
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
