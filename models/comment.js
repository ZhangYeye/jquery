const mongoose = require('mongoose')
const providerSchema = new mongoose.Schema({
    iconUrl:String,
    area:String,
    city:String,
    comment:String,
    createtime:Number,
    nick:String,
    star:Number,
},{
  collection:'comments'
})

module.exports = mongoose.model('comments',providerSchema)
