const express = require("express");
const newsRouter = require("./src/routes/news");
const app = express();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//Templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Routing
// app.get("/", async (req, res) => {
//   res.render("index");
// });

app.use("/", newsRouter);

app.listen(3000, () => {
  console.log(`sever running`);
});
