
import { Sequelize } from "sequelize";
import { config } from "../config/index.js"

import PortfolioMeta from "./PortfolioMeta.js";

const sequelize = new Sequelize(config.dev);

export const db = {
    sequelize,
    PortfolioMeta
};

db.sequelize = sequelize
PortfolioMeta.init(sequelize);

// PortfolioMeta.associate(db);


export {sequelize}
export default db;
