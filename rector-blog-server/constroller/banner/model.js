const mongoose = require('mongoose')
const BannerSchema = mongoose.Schema({
    title: String, 
    banner_img: String,
});

module.exports = mongoose.model('banner', BannerSchema)