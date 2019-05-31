const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Yo server~");
});

app.listen(3306, () => {
  console.log(`Your server is runnin' on localhost:3306`);
});
