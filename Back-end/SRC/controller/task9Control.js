exports.asyncFetch = async (req, res) => {
  try {
    let data = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Async result after 3second"), 3000);
    });

    res.status(200).json({ status: "Success", msg: data });
  } catch (error) {
    res.status(500).json({ status: "Failed", msg: error });
  }
};
