const express = require('express')
const router = express.Router()
const {Enum} = require('../../utils/Enum')
const {find,insert,updateById} = require('../../utils/mongo')
router.get('/',async(req,res)=>{
    const result = await find('instantsList',{},{
        sort:'creTime,1'
    })
    console.log(result);
    res.send(Enum(1001,result))
})
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    const result = await find('instantsList',{
        _id:id
    })
    res.send(Enum(1001,result))
})
router.post('/publish',async(req,res)=>{
    const {
       userId,
       context
    }=req.body
    const creTime = Date.now()
    await insert('instantsList',{
        userId,
        context,
        location:'广州市',
        thumbs:[],
        comments:[],
        imgUrl:'/iuu.jpg',
        tags:['测试'],
        creTime
    })
    res.send(Enum(1001))
})
router.post('/thumbs',async(req,res)=>{
    console.log(1);
    const {
        _id,
        userId,
    }=req.body
   
    const result = await find('instantsList',{
        _id
    })
    if(result[0].thumbs.includes(userId)){
        res.send(Enum(1004,[],'重复点赞'));
    }else{
        await updateById('instantsList',{
            thumbs:[userId,...result[0].thumbs]
        },_id)
        res.send(Enum(1001,[],'点赞成功'))
    }
  
})
module.exports=router