const mongoose = require('mongoose')

const YangilikSchema = mongoose.Schema({

    title_uz: String,
    title_ru: String,
    title_en: String,
    width: String,
    height: String,
    photo: String,
    date: String
    


});


module.exports = mongoose.model('photoSchema', YangilikSchema);