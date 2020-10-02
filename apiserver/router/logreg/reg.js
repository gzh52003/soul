const express = require('express')
const router = express.Router()
const token = require("../../utils/token")
const {
  md5
} = require("../../utils/secret");
const {
  insert
} = require("../../utils/mongo")
const userTamp = require("../../utils/userTamp");
const {
  Enum
} = require("../../utils/Enum");
const mongo = require('../../utils/mongo');
router.post('/', async (req, res) => {
  let {
    username,
    password,
    phoneNum,
    birthday
  } = req.body;

  console.log('req.session.Sms', req.session.Sms)
  password = md5(password)
  let userData = {
    phoneNum,
    password,
    userName: username,
    planet: "",
    avatorImgUrl: "",
    bgImgUrl: "",
    birthday,
    creTime: Date.now() + "",
    gender: "unkonw",
    gravity: [],
    followed: [],
    beFollowed: [],
    instants: []
  }

  let result = await mongo.insert('userList', userData);

  userData = { verCodeRight: true, userData }
  let authorization;
  authorization = token.create({
    _id: userData._id
  }, '7d')
  userData.authorization = authorization

  res.send(Enum(1001, userData))

})
module.exports = router