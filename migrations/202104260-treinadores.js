'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('treinadores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      level: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      poke_preferido: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      timestamps: false
    });
  }
};
