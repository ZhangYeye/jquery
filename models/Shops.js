const mongoose = require('mongoose')
const shopSchema = new mongoose.Schema({
  serviceIndex:{type:String,unique:true},
  serviceType:{type:Array,unique:true},
  shopList:{type:Array,unique:true}
},{
  collection:'shops'
})

module.exports = mongoose.model('shop',shopSchema)