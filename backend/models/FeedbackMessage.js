import { Model , DataTypes } from "sequelize";

import {models} from "../models/index.js" 
  // index.js 에서 PortfolioMeta.associate(models); 이렇게 이미 연결을 해주기 때문에
  // 굳이 여기에서 models 를 안써도 됨. | 설령 쓴다고 해도 비활성화 됨 

class FeedbackMessage extends Model {
    static init(sequelize) {
        return super.init(
            {
                // 피드백을 준 사용자 이름 
                name : {
                    type: DataTypes.TEXT
                },
                email : {
                    type: DataTypes.STRING
                },
                description : {
                    type: DataTypes.STRING
                },
                ratings : {
                    type: DataTypes.INTEGER
                }
            }, 
            {
                sequelize, // 현재 데이터베이스의 sequelize 를 받음 
                underscored: false, // 모델 필드에 snake_case 적용할지 여부 
                timestamps: true, // createAd, updatedAt 추가 여부 
                modelName: "FeedbackMessage", // sequelize 내부에서 
                tableName: "feedbackmessages", // models 에서 사용할 이름. | 검색 인덱싱에서 대소문자를 구분하지 않기 때문에 소문자로 
                    // 주로 테이블 이름은 복수형으로 작성 
                charset: "utf8", 
                collate: "utf8_general_ci", // 인코딩 관련
            }
        )
    }

    // feedback 은 다른 DB 와 연관될 부분은 없음. 
        // static associate(models) {
        //     this.belongsTo(models.PortfolioMeta, {
        //         foreignKey: "portfolioMetaId",
        //         as: "portfolioMeta", // 별칭. include 로 참조할 때 사용 | 아직 이해 부족 😔😔
        //       });
        // }
}

export default FeedbackMessage;
