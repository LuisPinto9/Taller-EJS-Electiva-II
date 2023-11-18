const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();

// setters
app.set("PORT", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"/public")))
app.use("/", require("./routes/index"))

app.listen(app.get("PORT"), () =>
  console.log(`Server listen at port ${app.get("PORT")}`)
);
