const express = require('express')
const router = express.Router()
const {
    find
} = require("../../utils/mongo")
const {
    Enum
} = require("../../utils/Enum")

router.get("/",async (req,res)=>{
    const{
        phoneNum,
        yzm
    } = req.query
    if (yzm != req.session.Sms) {
        res.send(Enum(1001,{
            verCodeRight:false
        }))
        return;
    }
    const userInfo = await find("userList", {
        phoneNum
    })
    if (userInfo.length === 1) {
        delete userInfo[0].password;
        let data = {
            verCodeRight: true,
            userData: userInfo[0]
        }
        res.send(Enum(1001,data))
    } else if(userInfo.length === 0){
        let data = {verCodeRight: false}
        res.send(Enum(1001,data))
    }else{
        res.send(Enum(1003,{},"数据库发现同号码用户,数据库异常"))
    }
})

module.exports = router