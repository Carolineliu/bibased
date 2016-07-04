'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Contests', {
      contestId: {   
        type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true  
      },
      contestName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isWin: {   
        type: Sequelize.STRING,
        allowNull: false
      },
        leader: {   
        type: Sequelize.STRING,
           allowNull: false
      },
      leaderTel: {
        type: Sequelize.STRING,
           allowNull: false
      },
      type: {   
        type: Sequelize.STRING
      },
      studentCount: {   
        type: Sequelize.TEXT,
         allowNull: false
      },
      studentTel: {
        type: Sequelize.STRING,
           allowNull: false
      },
      tutor: {   
        type: Sequelize.TEXT,
           allowNull: false
      },
      year: {
        type: Sequelize.STRING
      },
      contestScore: {   
        type: Sequelize.FLOAT
      },
      contestCover: {
        type: Sequelize.STRING
      },
      schedule: {
        type: Sequelize.STRING
      },
      prelim: {
        type: Sequelize.FLOAT
      },
      final: {
        type: Sequelize.FLOAT
      },
      intro: {
        type: Sequelize.TEXT
      },
      introduce: {
        type: Sequelize.TEXT
      },
      schoolName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Contests');
  }
};
