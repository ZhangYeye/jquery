const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  title:String,
  name:String,
  desc:String,
  price:Number,
  oldPrice:Number,
  orderCount:Number,
  soldCount:Number,
  commentCount:Number,
  accept:String,
  praise:String,
  imgUrl:String,
  company:String,
  profile:String,
},{collection:'item'})

module.exports = mongoose.model('item',itemSchema)