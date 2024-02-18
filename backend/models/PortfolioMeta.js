import { Model, DataTypes } from "sequelize";

class PortfolioMeta extends Model {
  static init(sequelize) {
    return super.init(
      {
        // 종류 구분 : 프로젝트(project) or 기능구현(feature)
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // 제목 (프로젝트 제목, 기능 구현 제목)
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // 업무 요약 (task summary, summary)
        summary: {
          type: DataTypes.STRING,
        },
        // ✅ 프로젝트의 경우, 세부 기능
        subTasks: {
          type: DataTypes.STRING,
        },
        // 📛 아키텍처 (ERD, 시퀀스, 흐름도)
        architectureImg_1: {
          type: DataTypes.STRING,
        },
        // 📛 아키텍처 (ERD, 시퀀스, 흐름도)
        architectureImg_2: {
          type: DataTypes.STRING,
        },
        // 📛 아키텍처 (ERD, 시퀀스, 흐름도)
        architectureImg_3: {
          type: DataTypes.STRING,
        },
        // 📛 아키텍처 (ERD, 시퀀스, 흐름도)
        architectureImg_4: {
          type: DataTypes.STRING,
        },
        // 📛 아키텍처 (ERD, 시퀀스, 흐름도)
        architectureImg_5: {
          type: DataTypes.STRING,
        },
        // 담당 역할 (frontend, backendend, aws, 기획)
        roles: {
          type: DataTypes.STRING,
        },
        // 사용 스택 (skils, stack)
        stacks: {
          type: DataTypes.STRING,
        },
        // 프로젝트 이름 : feature 에 경우 꼭 필요. project 의 경우에도 작성 (parentProject)
        parentProject: {
          type: DataTypes.STRING,
        },
        // 기능 담당자, 팀플의 팀원 (assignee)
        assignee: {
          type: DataTypes.STRING,
        },
        // 기여도 (contributionRate)
        contributionRate: {
          type: DataTypes.FLOAT,
        },
        // 기간 | startDate
        startDate: {
          type: DataTypes.DATE,
        },
        // 기간 | endDate
        endDate: {
          type: DataTypes.DATE,
        },
        // 시연 영상 | demoVideo
        demoVideo_1: {
          type: DataTypes.STRING,
        },
        // 시연 영상 | demoVideo
        demoVideo_2: {
          type: DataTypes.STRING,
        },
        // 시연 영상 | demoVideo
        demoVideo_3: {
          type: DataTypes.STRING,
        },
        // 시연 영상 | demoVideo
        demoVideo_4: {
          type: DataTypes.STRING,
        },
        // 시연 영상 | demoVideo
        demoVideo_5: {
          type: DataTypes.STRING,
        },
        // ASW 배포 주소 | deployedURL
        deployedURL: {
          type: DataTypes.STRING,
        },
        // 해당 깃헙 레파지토리 | repository
        repository: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize, // 현재 데이터베이스의 sequelize 를 받음
        underscored: false, // 모델 필드에 snake_case 적용할지 여부
        timestamps: true, // createdAt, updatedAt 필드를 추가할지 여부
        modelName: "PortfolioMeta", // sequelize 내부에서
        tableName: "portfoliometa", // DB 에서 사용할 테이블 이름 ⭐ | 반드시 소문자로! 
          // 왜냐면, 검색 인덱싱 작업에서, 대소문자 구분 관련해서, 소문자로 하는게 더 나을 것 같다고 해서 
        charset: "utf8", // 인코딩 관련
        collate: "utf8_general_ci", // 인코딩 관련

        // 인덱싱 
        indexes : [
          {
            type : 'FULLTEXT', 
            name : 'text_idx', // 인덱싱의 고유한 이름. | 다른 인덱싱 이름과 겹치면 안 
            
            // 이 필드에 대해서 검색이 이루어짐 
            fields : ['title' , 'summary' , 'subTasks' , 'roles' , 'stacks' , 'parentProject']
          }
        ]
        
      }
    );
  }

  // static associate(db) {
  //     db.User.hasMany(db.Real_estate, { foreignKey : "seller", sourceKey : "id"});
  // }
}

export default PortfolioMeta;
