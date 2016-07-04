module.exports = function(sequelize, DataTypes) { 
  var Contest =  sequelize.define('Contest', {  
    contestId: {   
      type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true  
    },
    contestName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isWin: {   
      type: DataTypes.INTEGER,
         allowNull: false  
    },
      leader: {   
      type: DataTypes.STRING,
         allowNull: false
    },
    leaderTel: {
      type: DataTypes.STRING,
         allowNull: false
    },
    type: {   
      type: DataTypes.STRING
    },
    studentCount: {   
      type: DataTypes.STRING,
       allowNull: false
    },
    studentTel: {
      type: DataTypes.STRING,
         allowNull: false
    },
    tutor: {   
      type: DataTypes.STRING,
         allowNull: false
    },
    year: {
      type: DataTypes.STRING
    },
    contestScore: {   
      type: DataTypes.FLOAT
    },
    contestCover: {
      type: DataTypes.STRING
    },
    schedule: {
      type: DataTypes.STRING
    },
    prelim: {
      type: DataTypes.FLOAT
    },
    final: {
      type: DataTypes.FLOAT
    },
    intro: {
      type: DataTypes.TEXT
    },
    introduce: {
      type: DataTypes.TEXT
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }); 
  return Contest;
};
