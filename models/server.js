const mongoose = require('mongoose')
const providerSchema = new mongoose.Schema({

  title:{type:String},
  id:{type:String,unique:true},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String},

},{
  collection:'providers'
})

module.exports = mongoose.model('provider',providerSchema)
