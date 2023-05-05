const {check, validationResult} = require("express-validator");




const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next();
        } catch (err) {
            res.status(403);
            res.send({errors: err.array() });
        }
    }
];

module.exports = { validatorGetItem};