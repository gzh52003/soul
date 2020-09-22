const express = require('express')
const {PORT} = require('./config.json')
const allRouter = require('./router')

const app = express()

app.use('/api',allRouter)

app.listen(PORT,()=>{
    console.log(`server is run on port ${PORT}`)
})