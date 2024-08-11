const express = require("express");
const router = express.Router();
const addController = require("../controllers/addController");


// post admission//

router.post("/add",addController.createAdmssion )
router.get("/add", addController.getAdmission)

module.exports = router;