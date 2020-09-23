const ws = require('ws');//引入websocket

let user={};//存储连接用户

let online=0;//存储在线人数



module.exports = function(server){
    let wss = new ws.Server({
        server,
    });
    wss.on('connection',(client)=>{
        // 当客户端连接socket服务器时，触发connection事件，传递客户端对象，并把所有客户端对象保存在wss.clients属性中
        // client：客户端对象
        console.log('connection_size',wss.clients.size);
    
        client.on('message',(msg)=>{
            console.log('msg',msg);
            //console.log("wss.clients",wss.clients);
            // 收到信息，广播给所有连接的用户
            //let wssClientsMsg = JSON.stringify(wss.clients)
            //console.log("wssClientsMsg",wssClientsMsg);
            let num = 0;
            wss.clients.forEach(item=>{
                console.log("发送人数",++num);
                item.send(msg);
            })
        })
    })
}
