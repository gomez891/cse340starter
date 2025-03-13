// Needed Resources
const express = require("express")
const router = new express.Router()
const invConroller = require("../controllers/invController")
const utilities = require("../utilities/index")
const regValidate = require('../utilities/inv-validation')


// Route to build inventory by classifcation view
router.get("/type/:classificationId", utilities.handleErrors(invConroller.buildByClassificationId));



// Route to build the vehicle view page
router.get("/detail/:invId", utilities.handleErrors(invConroller.buildByInvId));
module.exports = router;

// Route to build the managment view page
router.get('/management', utilities.handleErrors(invConroller.buildManagment))

//Route to build the add classification view page
router.get('/add-classification', utilities.handleErrors(invConroller.buildAddClassification)) 

router.post(
    "/login",
    regValidate.classificationRules(),
    regValidate.checkClassData,
    utilities.handleErrors(invConroller.addClassification)
)