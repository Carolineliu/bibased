'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Admins', {
      adminId: {   
        type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true  
      },
      adminName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idCard: {   
        type: Sequelize.STRING,
           allowNull: false  
      },
        telephone: {   
        type: Sequelize.STRING,
           allowNull: false
      },
      password: {   
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Contests');
  }
};
