const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const db = require("./models");
const userAPIRouter = require("./routes/user"); // 공통된 부분을 따로 빼냄 모듈화? /api/user
const postAPIRouter = require("./routes/post");
const postsAPIRouter = require("./routes/posts");

const app = express();

db.sequelize.sync();

app.use(morgan("dev"));

//  req.body를 사용하기 위해
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use("/api/user", userAPIRouter);
app.use("/api/post", postAPIRouter);
app.use("/api/posts", postsAPIRouter);

app.listen(3306, () => {
  console.log(`Your server is runnin' on localhost:3306`);
});
