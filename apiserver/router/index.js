const express = require('express')
const router = express.Router()
const session = require("express-session")
const cors = require("./filter/cors");
//login
const loginAuto = require("./logreg/autoCheck")
const loginPass = require("./logreg/loginpass")
const regSms = require("./logreg/regSms")
const sendSms = require("./logreg/sendSms")
const loginSms = require("./logreg/loginSms")
//planet
const getPlanetInfo = require('./getPlanet/getPlanetInfo')
const moment = require('./Moment/index')

router.use(express.urlencoded({
    extended:false
}),express.json())
router.use(cors);
router.use(session({
    secret: 'dandan',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))

console.log("allrouter")

//login
router.use("/loginauto",loginAuto)
router.use("/regsms",regSms)
router.use("/loginpass",loginPass)
router.use("/sendsms",sendSms)
router.use("/loginsms",loginSms)
//planet
router.use("/getplanetinfo",getPlanetInfo)

router.use('/Moment',moment)
module.exports = router