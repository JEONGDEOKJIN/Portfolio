import dotenv from "dotenv"
dotenv.config();

export const config = {
    dev : {
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        dialect: "mysql",
    }
}

/* 위의 버전은 ts 버전. 혹시 안 되면 아래 버전으로 
const config = {
    dev: {
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      dialect: "mysql",
      timezone: "+09:00",
      dateStrings: "date",
    },
  };
  
  module.exports = config;
  
*/