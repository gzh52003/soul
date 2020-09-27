const allow_origin = ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:8081', 'http://localhost:8085'];

function cors(req, res, next) {
    const origin = req.get('Origin');
    console.log(origin);
    if (allow_origin.includes(origin)) {
        res.set({
            // "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
            "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Credentials": true,
        })
        if (req.method == "option") {
            res.setStatus("200"); //跨域请求会发送一个method为option的请求类型
        } else {
            next();
        }
     }

}
module.exports = cors;