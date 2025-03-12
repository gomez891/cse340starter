const utilities = require("../utilities/index")
const managementController = {}

managementController.buildManagment = async function(req, res) {
    const nav = await utilities.getNav()
    res.render("./inventory/management", {title: "Managment", nav})
}

module.exports = managementController