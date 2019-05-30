const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // /api/user/
});
router.post("/", async (req, res, next) => {
  // POST /api/user 회원가입
});

router.get("/:id", (req, res) => {
  // 남의 정보 가져오는 것 ex) /api/user/123
});

router.post("/logout", (req, res) => {
  // /api/user/logout
});

router.post("/login", (req, res, next) => {
  // POST /api/user/login
});

router.get("/:id/follow", (req, res) => {
  // /api/user/:id/follow
});
router.post("/:id/follow", (req, res) => {});

router.delete("/:id/follow", (req, res) => {});

router.delete("/:id/follower", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

module.exports = router;
