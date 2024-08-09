const Admssion = require("../model/admisson");

exports.createAdmssion = async (req, res) => {
  try {
    const { name } = req.body;

    const addData = new Admssion({
      name,
    });

    await addData.save();
    res.status(201).json(addData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
