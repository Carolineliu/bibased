module.exports = function(sequelize, DataTypes) { 
  var Admin =  sequelize.define('Admin', {  
    adminId: {   
      type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true  
    },
    adminName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idCard: {   
      type: DataTypes.STRING,
         allowNull: false  
    },
      telephone: {   
      type: DataTypes.STRING,
         allowNull: false
    },
    password: {   
      type: DataTypes.STRING,
      allowNull: false
    }
  }); 
  return Admin;
};
