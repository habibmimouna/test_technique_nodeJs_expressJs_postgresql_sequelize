module.exports = (sequelize, Sequelize) => {
    const Farmyard = sequelize.define("farmyard", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     
    });
  
    return Farmyard;
  };