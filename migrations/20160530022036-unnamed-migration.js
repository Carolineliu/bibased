'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Notices', {
      noticeId: {   
        type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true  
      },
      noticeTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      noticeContent: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      noticeTime:{
        type: Sequelize.STRING
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Notices');
  }
};
