module.exports = function(sequelize, DataTypes) { 
  var Time =  sequelize.define('Time', {  
    timeId: {   
      type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true  
    },
    prelimBegin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prelimOver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finalBegin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finalOver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applyBegin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applyOver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    submitOver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Time;
};
