'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('News', {
      newsId: {   
        type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true  
      },
      newsTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      newsContent: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      newsTime: {
        type: Sequelize.STRING
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('News');
  }
};
