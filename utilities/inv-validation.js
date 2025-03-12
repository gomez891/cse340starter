const utilities = require('.')
const {body, validationResult} = require("express-validator")
const validate = {}

/* ****************************************
*   Classification Data Valdiation Rules
* *****************************************/

validate.classificationRules = () => {
    return[
        body("classification_name")
        .trim()
        .escape()
        .notEmpty()
        .isLength({min: 1})
        .withMessage()
        .isAlphanumeric()
    ]
}




/* *******************************************************************
*   Check data and return errors or continue to classification addition
* *********************************************************************/

validate.checkClassData = async (req, res, next) => {
    const { classification_name } = req.body
    let errors = []
    errors = validationResult(req)
    if(!errors.isEmpty()) {
        let nav = await utilities.getNav()
        res.render("/" ,{
            errors,
            title: "Home",
            nav,
            classification_name,
        })
        return
    }
    next()
}

module.exports = validate