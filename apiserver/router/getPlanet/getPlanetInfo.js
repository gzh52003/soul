const express = require('express')
const router = express.Router()
const {
    find,
} = require("../../utils/mongo")
const {
    Enum
} = require("../../utils/Enum");

router.get("/",async(req,res)=>{
    const{
        phoneNum
    }=req.query;

    //console.log("_id=",_id);
    let userList = await find("userList",{
        phoneNum:{
            $ne:phoneNum
        }
    },{
        pagesize:62
    })
    if(userList.length == 62){
        res.send(Enum(1001,userList))
    }else{
        res.send(Enum(1003,{},"数据库返回文档数错误"))
    }
})

module.exports = router;