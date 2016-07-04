'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Times', {
      timeId: {   
        type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true  
      },
      prelimBegin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prelimOver: {
        type: Sequelize.STRING,
        allowNull: false
      },
      finalBegin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      finalOver: {
        type: Sequelize.STRING,
        allowNull: false
      },
      applyBegin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      applyOver: {
        type: Sequelize.STRING,
        allowNull: false
      },
      submitOver: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Notices');
  }
};
