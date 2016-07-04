module.exports = function(sequelize, DataTypes) { 
  var Notice =  sequelize.define('Staff', {  
    staffId: {   
      type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true  
    },
    staffName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    staffPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }); 
  return Notice;
};
