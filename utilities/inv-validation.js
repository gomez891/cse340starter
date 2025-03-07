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

validate.checkClassData = async (req, resizeBy, next) => {

}