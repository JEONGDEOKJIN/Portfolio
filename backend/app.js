import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { sequelize } from "./models/index.js";
import cors from "cors";
import fs from "fs";

import portfolioMetaRouter from "./routers/portfolioMeta/index.js";
import adminRouter from "./routers/admin/index.js";
import feedbackmessageRouter from "./routers/feedbackmessage/index.js"

const app = express();

// multer 실행을 위한 uploads 폴더 설정
try {
  fs.readdirSync("uploads"); // 'uploads' 폴더 확인
} catch (error) {
  console.error("uploads 폴더가 없어, 폴더를 생성합니다.");
  fs.mkdirSync("uploads"); // 'uploads' 폴더 생성
}

app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 본문을 파싱하기 위한 설정 (form 데이터 처리)
app.use(express.json()); // 이걸 하면, 클라이언트에서 서버로 보낼 때, req.body 에서 받을 수 있어⭐
// app.ts 에서 dirname == /c/Users/user11/Desktop/kga/projects/Real_estate_STO_project/backend

// img 태그에서 src 로 이미지 요청 할 때, 사용되는 이미지 가져오는 경로
// common JS 에서의 구현
// app.use("/getImg", express.static(path.join(__dirname, "/uploads")));
// img 에서 소스 경로 localhost:3000/getImg 같은거
// http://locahost:3000/getimg/admin_main_chartjs_1707908168730.jpg
// 동일 기능을 ES6 에서의 구현
const __filename = fileURLToPath(import.meta.url); // 현재 파일의 URL 얻기
const __dirname = path.dirname(__filename); // 현재 파일이 위치한(현재 파일의 근접 디렉토리) 디렉토리 주소 구하기
app.use("/getImg", express.static(path.join(__dirname, "uploads")));

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
  // 1) model 에서 설정 바꿈 -> 2) forece : true 로 하고 -> 3) 다시, 백엔드 시작하면, 바뀌어 있음.
  // 즉, 'force: true'라면, model 의 최신정의를 반영해서 -> 다시, 새로운 테이블(DB)을 만든다.

  .then(() => {
    console.log("database Connect");
  })
  .catch((err) => {
    console.error(err);
  });

// 라우터 미들웨어 설정
app.use("/meta_data", portfolioMetaRouter);
// '/meta_data/allMetaData' 경로로 요청할 경우 -> 앞부분이 /meta_data 이면, portfolioMetaRouter 로 가게 한다. -> 그 안에서, 어떤 controller 로 갈지 찾는다.

app.use("/admin", adminRouter);
// 📛 이미지 경로 설정
// app.use("/user_imgs", express.static(path.join(__dirname, "imgs", "userImg")));

app.use("/feedbackmessage" , feedbackmessageRouter)

// 서버 설정
const PORT = 7070;
app.listen(PORT, () => {
  console.log("서버 열림🙌🙌🙌");
});
