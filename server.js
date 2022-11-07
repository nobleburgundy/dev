const express = require("express");
const exphbs = require("express-handlebars");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const portfolio_data = require("./portfolio-data");
const job_data = require("./jobs-data");

app.get("/", (req, res) => {
  res.render("index", { projects: portfolio_data, jobs: job_data });
});

app.get("/api/portfolio", cors(), (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  res.json(portfolio_data);
});

app.get("/api/job_experience", cors(), (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  res.json(job_data);
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
