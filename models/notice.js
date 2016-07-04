module.exports = function(sequelize, DataTypes) { 
  var Notice =  sequelize.define('Notice', {  
    noticeId: {   
      type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true  
    },
    noticeTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    noticeContent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    noticeTime :{
      type: DataTypes.STRING
    }
  }); 
  return Notice;
};
