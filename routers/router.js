const express = require('express')
const router = express.Router()
const shopList = require('../models/Shops')
const provider = require('../models/server')
const item = require('../models/item')
const comment = require('../models/comment')
/*首页*/
router.get('/shoplist',(req,res) =>  {
  shopList.find({},function (err,list) {
    if(!err){
      res.send({list:list});
      //console.log(list)
    }
  })
})
/*服务商*/
router.get('/provider',(req,res) => {
  provider.find({},function(err,item){
    if(!err){
      res.send({item:item});
     // console.log(item)
    }
  })
})
/*列表*/
router.get('/item',(req,res) => {
  item.find({},function(err,item) {
    if(!err){
      res.send({item:item})
     // console.log(item)
    }
  })
})

/*评论*/
router.get('/comment',(req,res) => {
  const page = req.query.page

  comment.find({}).limit(10).skip((page-1)*10).exec(function(err,comment){
    if(!err){
      res.send({comment:comment})
    }
  })
})


module.exports = router