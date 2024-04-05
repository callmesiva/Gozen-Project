const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const db = require("./dbConfig");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const cronJob = require("./middleware/cronJob");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Task-10 CronJob
cronJob.scheduleTasks();

//Task-8 Log every request in separate file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));

const task1to4Route = require("./SRC/route/task1to4Route");
const task5and7and11Route = require("./SRC/route/task5and7and11Route");
const task6Route = require("./SRC/route/task6Route");
const task9Route = require("./SRC/route/task9Router");

app.use("/", task1to4Route, task5and7and11Route, task6Route, task9Route);

//Task-8 Global error handler
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
