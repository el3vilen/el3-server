const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
  console.log('popoo');
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  console.log(req.path);
  console.log('All popoo');
  res.send("Hello All!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
