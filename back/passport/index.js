const passport = require("passport");
const db = require("../models");
const local = require('./local')

module.exports = () => {
  passport.serializeUser((user, done) => {  // 서버쪽에 [{id: 1, cookie: 'epiwnvlksdnie'}]
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id }
      });
      return done(null, user); // req.user
    } catch (e) {
      console.log(e);
      return done(e);
    }
  });

  local();
};

// 프론트에서 서버로 쿠키를 보냄 cookie: 'epiwnvlksdnie'
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id:1 발견
// id:1 이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감
// 요청 보낼 때마다 deserializeUser가 실행됨
// 실무에서는 deserializeuser 결과물 캐싱해서 서버비용 절약