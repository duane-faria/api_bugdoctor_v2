'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bugs', {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('bugs');
  },
};
