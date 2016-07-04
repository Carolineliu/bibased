'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      userId: {   
        type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true  
      },
      studentId: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {   
        type: Sequelize.STRING,
           allowNull: false  
      },
        name: {   
        type: Sequelize.STRING,
          allowNull: false  
      },
      gender: {   
        type: Sequelize.ENUM('F', 'M'),
           allowNull: false
      },
      email: {   
        type: Sequelize.STRING,
           allowNull: false
      },
      telephone: {   
        type: Sequelize.STRING
      },
      contestId: {   
        type: Sequelize.INTEGER
      },
      contestArray:{
        type:Sequelize.TEXT
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
