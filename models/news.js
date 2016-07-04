module.exports = function(sequelize, DataTypes) { 
  var New =  sequelize.define('New', {  
    newsId: {   
      type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true  
    },
    newsTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    newsContent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    newsTime: {
      type: DataTypes.STRING
    }
  }); 
  return New;
};
