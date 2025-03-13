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

/* ********************************************************
*   Build Managment View
*  ********************************************************/
invCont.buildManagment = async function (req,res) {
  const nav = await utilities.getNav()
  res.render("./inventory/management",
    {
      title: "Management",
      nav,
    }
  )
  
}

/* ********************************************************
*   Deliever add classification view
*  ********************************************************/
invCont.buildAddClassification = async function (req, res) {
  let nav = await utilities.getNav()
  res.render("./inventory/add-classification",
    {
    title: "Add Classification",
    nav,
  }
  )
}



/* ********************************************************
*   Process classification
*  ********************************************************/
invCont.addClassification = async function (res,req) {
  let nav = await utilities.getNav()
  const {classification_name} = req.body

  const regResult = await invModel.addClassification(
    classification_name,
  )

  if(regResult){
    req.flash(
      "notice",
      `Congratulations, ${classification_name} has been added!`
    )
    res.status(201).render("/management", {
      title: "Management",
      nav,
    })
  } else {
    req.flash("notice", "Sorry the classification name wasn't added")
    res.status(501).render("/inv/add_classification", {
      title: "Add Classification",
      nav,
    })
  }
}

module.exports = invCont