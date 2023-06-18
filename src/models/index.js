const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.chickens = require("./chicken.model.js")(sequelize, Sequelize);
db.farmyards = require("./faryard.model.js")(sequelize, Sequelize);

db.farmyards.hasMany(db.chickens, {
  foreignKey:'farmyardId',
  as:'chicken'
});

db.chickens.belongsTo(db.farmyards, {
  foreignKey: 'id',
  as: 'farmyard'
})

module.exports = db;
