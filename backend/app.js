const { PortfolioMetaRouter } = require("./routers")

const express = require("express");
const { sequelize } = require("./models")
const cors = require("cors")
const app = express();

app.use(express.urlencoded({ extended: false }));

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
app.use("/itemList" , PortfolioMetaRouter)
// 📛 이미지 경로 설정
// app.use("/user_imgs", express.static(path.join(__dirname, "imgs", "userImg")));


// 서버 설정
const PORT = 7070;
app.listen(PORT, () => {
  console.log("서버 열림🙌🙌🙌");
});
