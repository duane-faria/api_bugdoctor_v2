'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'team_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
      });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'teamId');
  },
};
