const express = require('express')
const router = express.Router()
const {
    insert
} = require("../../utils/mongo")
// const userTamp = require("../../utils/userTamp");
const {
    Enum
} = require("../../utils/Enum");

// async function insertUser(phoneNum){
//     const result = await insert("userList",userTamp(phoneNum))
//     return result
// }
router.post("/",async (req,res)=>{
    const {
        phoneNum,
        yzm
    } = req.body;
    console.log('yzm',yzm)
    console.log('req.session.Sms',req.session.Sms)
    if (yzm != req.session.Sms) {
        res.send(Enum(1002,{
            verCodeRight:false
        },'验证码错误'))
        return;
    }else{
      res.send(Enum(1001,{},"验证成功"))
    }

    // insertUser(phoneNum).then(data=>{
    //     res.send(Enum(1001,{
    //         verCodeRight:true,
    //         userData:data.ops
    //     }))
    // },rejData=>{
    //     console.log(rejData);
    //     res.send(Enum(1003,{},"验证码正确但插入数据库失败"))
    // })
})

module.exports = router