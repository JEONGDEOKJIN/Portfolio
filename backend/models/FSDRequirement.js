import { Model, DataTypes } from "sequelize";

import {models} from "../models/index.js" 
  // index.js 에서 PortfolioMeta.associate(models); 이렇게 이미 연결을 해주기 때문에
  // 굳이 여기에서 models 를 안써도 됨. | 설령 쓴다고 해도 비활성화 됨 


class FSDRequirement extends Model {
  static init(sequelize) {
    return super.init(
      {
        // 기능명세서 - 기능 요구사항 : ✅ FSDRequirement 테이블로 이동
        fsd_functionalrequirement: {
          type: DataTypes.TEXT,
        },
        // 기능명세서 - 비기능 요구사항 : ✅ FSDRequirement 테이블로 이동
        fsd_nonfunctionalrequirement: {
          type: DataTypes.TEXT,
        },
        // 기능명세서 - 설명 : ✅ FSDRequirement 테이블로 이동
        fsd_description: {
          type: DataTypes.TEXT,
        },
        // 기능명세서 - 상태 : ✅ FSDRequirement 테이블로 이동
        fsd_status: {
          type: DataTypes.STRING,
        },
        // 외래키 필드
        portfolioMetaId: {
          type: DataTypes.INTEGER,
          references: {
            model: "PortfolioMeta", // 참조하는 테이블 이름
            key: "id", // 해당 테이블에서 참조하는 속성
          },
        },
      },
      {
        sequelize, // 현재 데이터베이스의 sequelize 를 받음
        underscored: false, // 모델 필드에 snake_case 적용할지 여부
        timestamps: true, // createdAt, updatedAt 필드를 추가할지 여부
        modelName: "FSDRequirement", // sequelize 내부에서
        tableName: "fsdrequirements", // models 에서 사용할 이름 | 테이블 이름은 보통 복수
        // 반드시 소문자로. 왜냐면, 검색 인덱싱에서 대소문자 구분할 때, 소문자로 하는게 더 나을것 같다고 해서
        charset: "utf8", // 인코딩 관련
        collate: "utf8_general_ci", // 인코딩 관련

        // 인덱싱
        indexes: [
          {
            type: "FULLTEXT",
            name: "fsd_requirement_idx",

            fields: [
              "fsd_functionalrequirement",
              "fsd_nonfunctionalrequirement",
              "fsd_description",
              "fsd_status",
            ],
          },
        ],
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.PortfolioMeta, {
      foreignKey: "portfolioMetaId",
      as: "portfolioMeta", // 별칭. include 로 참조할 때 사용 | 아직 이해 부족 😔😔
    });
  }
}

export default FSDRequirement;
