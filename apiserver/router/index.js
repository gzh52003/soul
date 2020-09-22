const express = require('express')
const router = express.Router()

router.use(express.urlencoded({
    extended:false
}),express.json())

module.exports = router