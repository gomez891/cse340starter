// Needed Resources
const express = require("express")
const router = new express.Router()
const invConroller = require("../controllers/invController")
const utilities = require("../utilities/index")


// Route to build inventory by classifcation view
router.get("/type/:classificationId", utilities.handleErrors(invConroller.buildByClassificationId));


// Route to build the vehicle view page
router.get("/detail/:invId", utilities.handleErrors(invConroller.buildByInvId));
module.exports = router;