module.exports = function(sequelize, DataTypes) { 
  var User =  sequelize.define('User', {  
    userId: {   
      type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true  
    },
    studentId: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {   
      type: DataTypes.STRING,
         allowNull: false  
    },
      name: {   
      type: DataTypes.STRING,
         allowNull: false
    },
    gender: {   
      type: DataTypes.ENUM('F', 'M'),
         allowNull: false
    },
    email: {   
      type: DataTypes.STRING,
         allowNull: false
    },
    telephone: {   
      type: DataTypes.STRING
    },
    contestId: {   
      type: DataTypes.INTEGER
    },
    contestArray:{
      type:DataTypes.TEXT
    }
  }); 
  return User;
};
