const express = require("express");

const router = require("./router");

const app = express();

const port = 3005;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
