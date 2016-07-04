'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Staffs', {
      staffId: {   
        type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true  
      },
      staffName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      staffPassword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Staffs');
  }
};
