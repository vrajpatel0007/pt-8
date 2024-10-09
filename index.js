const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes/route");
const connectDB = require("./src/db/dbconnect");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
module.exports = app;
app.use(routes);
app.get("/", (req, res) => {
  try {
    return res.send("Hello Everyone")
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
})
dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 3000

connectDB();
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});


