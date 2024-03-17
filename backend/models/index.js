import { Sequelize } from "sequelize";
import { config } from "../config/index.js";

import PortfolioMeta from "./PortfolioMeta.js";
import FSDRequirement from "./FSDRequirement.js";
import FeedbackMessage from "./FeedbackMessage.js";

const sequelize = new Sequelize(config.dev);


// models 객체에 모델 등록
export const models = {
  sequelize,
  Sequelize,

  FeedbackMessage: FeedbackMessage.init(sequelize), // 모델 초기화
  PortfolioMeta: PortfolioMeta.init(sequelize), // 모델 초기화
  FSDRequirement: FSDRequirement.init(sequelize), // 모델 초기화
};
// models.sequelize = sequelize
// models.PortfolioMeta = PortfolioMeta
// models.FSDRequirement = FSDRequirement

// 모델간 관계 설정
PortfolioMeta.associate(models);
FSDRequirement.associate(models);
// FeedbackMessage.associate(models);

export { sequelize };
// export default {models} ;
