const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.user) {
    return res.status(401).send("Please log in first");
  }
  const user = Object.assign({}, req.user.toJSON());
  delete user.password;
  return res.json(user);
});

router.post("/", async (req, res, next) => {
  try {
    const userExists = await db.User.findOne({
      where: {
        userId: req.body.userId
      }
    });
    if (userExists) {
      return res.status(403).send("The ID already exists");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword
    });
    console.log(newUser);
    return res.json(newUser);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) },
      include: [
        {
          model: db.Post,
          as: "Posts",
          attributes: ["id"]
        },
        {
          model: db.User,
          as: "Followings",
          attributes: ["id"]
        },
        {
          model: db.User,
          as: "Followers",
          attributes: ["id"]
        }
      ],
      attributes: ["id", "nickname"]
    });
    const jsonUser = user.toJSON();
    jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length: 0;
    jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length: 0;
    jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length: 0;
    req.json(user);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Log out succeeded");
});

// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) {
//       // 서버 에러
//       console.log(err);
//       return next(err);
//     }
//     if (info) {
//       // 로직 에러
//       return res.status(401).send(info.reason);
//     }
//     return req.login(user, loginErr => {
//       if (loginErr) {
//         return next(loginErr);
//       }
//     //   console.log('login success', req.user)
//       const filteredUser = Object.assign({}, user.toJSON()); // 비번 노출을 막기위해 유저 얕은 복사?
//       delete filteredUser.password; // 비번은 지워준다
//       return res.json(filteredUser);
//     });
//   })(req, res, next);
// });

router.post("/login", (req, res, next) => {
  // POST /api/user/login
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      // 서버 에러
      console.error(err);
      return next(err);
    }
    if (info) {
      // 로직 에러
      return res.status(401).send(info.reason);
    }
    return req.login(user, async loginErr => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [
            {
              model: db.Post,
              as: "Posts",
              attributes: ["id"]
            },
            {
              model: db.User,
              as: "Followings",
              attributes: ["id"]
            },
            {
              model: db.User,
              as: "Followers",
              attributes: ["id"]
            }
          ],
          attributes: ["id", "nickname", "userId"] // 비밀번호는 보내지 않음
        });
        console.log(fullUser);
        return res.json(fullUser);
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
});

router.get("/:id/follow", (req, res) => {});

router.post("/:id/follow", (req, res) => {});

router.delete("/:id/follow", (req, res) => {});

router.delete("/:id/follower", (req, res) => {});

router.get("/:id/posts", async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      where: {
        UserId: parseInt(req.params.id, 10),
        RetweetId: null
      },
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"]
        }
      ]
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
