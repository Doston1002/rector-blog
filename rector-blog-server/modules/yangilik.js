const mongoose = require('mongoose')

const YangilikSchema = mongoose.Schema({

    title_uz: String,
    title_ru: String,
    title_en: String,
    body_uz: String,
    body_ru: String,
    body_en: String,
    photo: String,
    category:{
        type: String,
        enum: ['a', 'b', 'c', 'd'],
        default: 'a'
    },
   
    date: String
});


module.exports = mongoose.model('YangilikSchema', YangilikSchema);