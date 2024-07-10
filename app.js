const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:5000"],
//     credentials: true,
//   })
// );

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("Came");
  console.log(req.body);

  res.json({ success: true });
});

app.listen(3000, () => console.log("Listning to PORT 3000.."));
