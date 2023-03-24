const mongoose = require('mongoose');
// const Region=require('./Region')
const Schema = mongoose.Schema;


const userSchema = Schema({
    phone: {type:String},
    password: {type:String},
    name: {type:String},
    // role: {type: String, enum:['admin','moderator', 'user'], default:"user"},
    
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);

// const userSchema = Schema({
//     email: {type:String, required: true},
//     password: {type:String, required: true},
//     name: {type:String, required: true},
//     role: {type: String, enum:['admin','moderator', 'user'], default:"user"},
//     regionId:{
//         type:mongoose.Schema.ObjectId,
//         ref:'Region',
//         required:true
//     },
//     date: {type: Date, required: true}
// });



