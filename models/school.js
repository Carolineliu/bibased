module.exports = function(sequelize, DataTypes) { 
  var School =  sequelize.define('School', {  
    schoolId: {   
      type: DataTypes.INTEGER,
         primaryKey: true
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }); 
  return School;
};
