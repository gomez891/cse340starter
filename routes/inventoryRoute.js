// Needed Resources
const express = require("express")
const router = new express.Router()
const invConroller = require("../controllers/invController")


// Route to build inventory by classifcation view
router.get("/type/:classificationId", invConroller.buildByClassificationId);


// Route to build the vehicle view page
router.get("/detail/:invId", invConroller.buildByInvId)
module.exports = router;