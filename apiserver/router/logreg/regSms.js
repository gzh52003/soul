const express = require('express')
const router = express.Router()
const {
    insert
} = require("../../utils/mongo")
const userTamp = require("../../utils/userTamp");
const {
    Enum
} = require("../../utils/Enum");

async function insertUser(phoneNum){
    const result = await insert("userList",userTamp(phoneNum))
    return result
}
router.post("/",async (req,res)=>{
    const {
        phoneNum,
        yzm
    } = req.body;
    if (yzm != req.session.Sms) {
        res.send(Enum(1001,{
            verCodeRight:false
        }))
        return;
    }
    insertUser(phoneNum).then(data=>{
        res.send(Enum(1001,{
            verCodeRight:true,
            userData:data.ops
        }))
    },rejData=>{
        console.log(rejData);
        res.send(Enum(1003,{},"验证码正确但插入数据库失败"))
    })
})

module.exports = router