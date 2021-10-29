'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'teamId',
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
