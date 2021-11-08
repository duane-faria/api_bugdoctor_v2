'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'bugs',
      'project_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id',
        },
      });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('bugs', 'project_id');
  },
};
