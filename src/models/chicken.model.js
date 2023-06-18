module.exports = (sequelize, Sequelize) => {
  const Chicken = sequelize.define("chicken", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
   
    birthday: {
      type: Sequelize.DATE
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    steps: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    isRunning: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    farmyardId:{
      type:Sequelize.INTEGER,
      allowNull: false,
    }
  });

  return Chicken;
};