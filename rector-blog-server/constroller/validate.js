const joi = require('joi');

class Validate{
    postNews = joi.object().keys({
        title_uz: joi.string().min(3).required(),
        title_ru: joi.string().min(3).required(),
        title_en: joi.string().min(3).required(),
        body_uz: joi.string().min(5).required(),
        body_ru: joi.string().min(5).required(),
        body_en: joi.string().min(5).required(),
        category: joi.string().valid("a","b", "c", "d"),
        date: joi.string().required()
    })
    putNews = joi.object().keys({
        title_uz: joi.string().min(3),
        title_ru: joi.string().min(3),
        title_en: joi.string().min(3),
        body_uz: joi.string().min(5),
        body_ru: joi.string().min(5),
        body_en: joi.string().min(5),
        category: joi.string().valid("a","b", "c", "d"),
        date: joi.string().required()
    })
    postPhoto = joi.object().keys({
        title_uz: joi.string().min(3).required(),
        title_ru: joi.string().min(3).required(),
        title_en: joi.string().min(3).required(),
        width: joi.string().min(3).required(),
        height: joi.string().min(3).required(),
        date: joi.string().required()
    })
    postMediaValidation = joi.object().keys({
        name: joi.string().min(2).required()
    })
    putPhoto = joi.object().keys({
        title_uz: joi.string().min(3),
        title_ru: joi.string().min(3),
        title_en: joi.string().min(3),
    })
    register = joi.object().keys({
        phone: joi.string().min(3).required(),
        password: joi.string().min(3).required(),
        name: joi.string().min(3).required(),     
    })

    editAdmin = joi.object().keys({
        phone: joi.string().min(3),
        password: joi.string().min(3),
        name: joi.string().min(3),     
    })

    login = joi.object().keys({
        phone: joi.string().min(3).required(),
        password: joi.string().min(3).required(),
    })

    postApplicaton = joi.object().keys({
        name: joi.string().min(5).required(),
        tel: joi.string().min(5).required(),
        email: joi.string().min(5).required(),
        type: joi.string().min(5).required(),
        body: joi.string().min(100).required(),
        status: joi.string().min(3)
    })
}

module.exports = new Validate;