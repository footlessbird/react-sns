const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {});

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

router.get("/:id", (req, res) => {});

router.post("/logout", (req, res) => {
    req.logout();
    req.session.destroy()
    res.send('Log out succeeded')
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      // 서버 에러
      console.log(err);
      return next(err);
    }
    if (info) {
      // 로직 에러
      return res.status(401).send(info.reason);
    }
    return req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
    //   console.log('login success', req.user)
      const filteredUser = Object.assign({}, user.toJSON()); // 비번 노출을 막기위해 유저 얕은 복사?
      delete filteredUser.password; // 비번은 지워준다
      return res.json(filteredUser);
    });
  })(req, res, next);
});

router.get("/:id/follow", (req, res) => {});

router.post("/:id/follow", (req, res) => {});

router.delete("/:id/follow", (req, res) => {});

router.delete("/:id/follower", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

module.exports = router;
