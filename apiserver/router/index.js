const express = require('express')
const router = express.Router()
const session = require("express-session")
//login
const loginAuto = require("./logreg/autoCheck")
const loginPass = require("./logreg/loginpass")
const regSms = require("./logreg/regSms")
const sendSms = require("./logreg/sendSms")
const loginSms = require("./logreg/loginSms")


router.use(express.urlencoded({
    extended:false
}),express.json())
router.use(session({
    secret: 'dandan',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))

//login
router.use("/loginauto",loginAuto)
router.use("/regsms",regSms)
router.use("/loginpass",loginPass)
router.use("/sendsms",sendSms)
router.use("/loginsms",loginSms)

module.exports = router