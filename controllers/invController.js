const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */

invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}
/* ***************************
*  Build inventory by vehicle view
* ************************** */

invCont.buildByInvId = async function (req, res, next) {
  const inv_id = req.params.invId
  if (inv_id >= 99){
    const error = new Error("Intentional Error")
    error.status = 500
    throw error
  }
  const data = await invModel.getInventoryByInvId(inv_id)
  const grid = await utilities.buildInvGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].inv_make + " " + data[0].inv_model
  
    res.render("./inventory/vehicle_view", {
      title: className,
      nav,
      grid,
    })

  
  
}


module.exports = invCont