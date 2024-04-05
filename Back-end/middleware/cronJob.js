const cron = require("node-cron");

function scheduleTasks() {
  //run every one minute
  cron.schedule("0 * * * *", () => {
    console.log("Task-10 CronJob: Sending email...");
  });
}

module.exports = { scheduleTasks };
