const mongoose = require('mongoose')

const StatisticsSchema = mongoose.Schema({
    total: Number,
    accepted: Number,
    rejected: Number,
    waiting: Number
});


module.exports = mongoose.model('StatisticsSchema', StatisticsSchema);