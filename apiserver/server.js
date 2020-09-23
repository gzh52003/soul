const http = require('http');
const {PORT} = require('./config.json')
const express = require('express');
const allRouter = require('./router')
const wss = require('./ws');

const app = express();

app.use(express.static('./'));

app.use('/api',allRouter)

// 注意：必须使用createServer返回的服务器监听端口
server.listen(PORT,()=>{
    console.log('server is running at'+PORT);
})


// 利用http模块连接express服务器与socket服务器
const server = http.createServer(app)

wss(server)
