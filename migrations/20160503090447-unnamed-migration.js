'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Schools', {
      schoolId: {   
        type: Sequelize.INTEGER,
           primaryKey: true
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Schools');
  }
};
