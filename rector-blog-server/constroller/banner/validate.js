const joi = require('joi');

class Validate{
    post = joi.object().keys({
        title: joi.string().min(3).required()
    })
}

module.exports = new Validate