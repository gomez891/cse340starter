// Needed Resources
const express = require("express")
const router = new express.Router()
const invConroller = require("../controllers/invController")

// Route to build inventory by classifcation view
router.get("/type/:classificationId", invConroller.buildByClassificationId);

module.exports = router;