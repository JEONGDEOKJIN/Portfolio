const Sequelize = require("sequelize");
const config = require("../config");
const PortfolioMeta = require("./PortfolioMeta");

const sequelize = new Sequelize(config.dev);

const db = {};

db.sequelize = sequelize;
db.PortfolioMeta = PortfolioMeta;

PortfolioMeta.init(sequelize);

// PortfolioMeta.associate(db);

module.exports = db;
