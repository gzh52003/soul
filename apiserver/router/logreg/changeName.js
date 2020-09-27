const express = require('express')
const router = express.Router()
const {
    find,
} = require("../../utils/mongo")
const {
    Enum
} = require("../../utils/Enum");
const token = require("../../utils/token")

router.post('/',async(req,res)=>{
  const {
    _id,myName
  } = req.body
  console.log(_id)
  let user = await find('userList',{_id})
  user= user[0]
  user.userName = myName
  console.log('user',user)
  let data = {
    verCodeRight: true,
    userData: user
}

let authorization;
authorization = token.create({
    _id:data.userData._id
}, '7d')
data.authorization = authorization
  res.send(Enum(1001,data,'返回数据成功'))
})
module.exports = router
