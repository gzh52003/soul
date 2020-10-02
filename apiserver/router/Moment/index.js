const express = require('express')
const router = express.Router()
const {Enum} = require('../../utils/Enum')
const {find} = require('../../utils/mongo')
router.get('/',async(req,res)=>{
    const result = await find('instantsList')
    console.log(result);
    res.send(Enum(1001,result))
})
module.exports=router