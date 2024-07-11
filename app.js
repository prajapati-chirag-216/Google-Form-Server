const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome to app");
});
app.get("/userData", (req, res) => {
  res.json("This is userData");
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.json({ success: true });
});

app.listen(3000, () => console.log("Listning to PORT 3000.."));
