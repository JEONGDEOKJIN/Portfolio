import express from "express";

import { sequelize } from "./models/index.js";
import cors from "cors";

import portfolioMetaRouter from "./routers/portfolioMeta/index.js"


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());   // 이걸 하면, 클라이언트에서 서버로 보낼 때, req.body 에서 받을 수 있어⭐


// 📛 cors 설정
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      // "http://3.37.244.154",
      // "http://ec2-3-37-244-154.ap-northeast-2.compute.amazonaws.com",
      // "http://www.busiman.shop",
    ],
    credentials: true,
  })
);

// sequelize 설정
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("database Connect");
  })
  .catch((err) => {
    console.error(err);
  });

// 라우터 미들웨어 설정
app.use("/meta_data", portfolioMetaRouter);
// 📛 이미지 경로 설정
// app.use("/user_imgs", express.static(path.join(__dirname, "imgs", "userImg")));

// 서버 설정
const PORT = 7070;
app.listen(PORT, () => {
  console.log("서버 열림🙌🙌🙌");
});
