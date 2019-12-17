const Joi = require('joi');

exports.validate_user = (req, res, next) => {
    const data = req.body;

    const schema = Joi.object().keys({
        username: Joi.string().required().max(5),
        password: Joi.string().required().min(8)
    })

    Joi.validate(req.body, schema)
        .then(validated => {
            console.log('succ');
            next();
        })
        .catch(err => {
            res.render("login", { message: err.details })
        })
}