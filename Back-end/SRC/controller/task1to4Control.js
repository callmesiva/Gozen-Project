const fs = require("fs");
const path = require("path");

exports.writeFile = (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const fullName = firstName + lastName + " ";
    const filePath = path.join(__dirname, "../../", "fullName.txt");

    fs.writeFileSync(filePath, fullName, { flag: "a" });

    res.status(200).json({ status: "Success", mgs: "Successfully created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.checkName = (req, res) => {
  try {
    const fullName = req.query.fullname;
    const filePath = path.join(__dirname, "../../", "fullName.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) res.status(500).json({ status: "Failed", mgs: "Error reading" });
      else {
        const names = data.split(" ");
        const exists = names.includes(fullName);
        res.status(200).json({ status: "Success", mgs: exists });
      }
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", mgs: error });
  }
};
