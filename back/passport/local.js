const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const db = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "userId",
        passwordField: "password"
      },
      async (userId, password, done) => {
        try {
          const user = await db.User.findOne({ where: { userId } });    // 기존 사용자검색
          if (!user) {  // 사용자가 존재하지 않을 때
            return done(null, false, { reason: "The ID does not exist" });
          }
          
          const result = await bcrypt.compare(password, user.password)  // 사용자가 존재할 경우 비밀번호 검증
          if(result){
              return done(null, user)
          }
          return done(null, false, {reason: 'The password is wrong'})
        } catch (e) {
          console.log(e);
          return done(e);   // 첫번째 인자는 서버에러 따라서 이 경우 null이 아님
        }
      }
    )
  );
};
