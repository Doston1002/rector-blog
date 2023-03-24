const mongoose = require('mongoose')

const MediaSchema = mongoose.Schema({
    name: String,
    link: String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Media', MediaSchema)