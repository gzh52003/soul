function Enum(code = 1001, data = [], msg = "success") {
    switch (code) {
        case 1002:
            msg = "fail";
            break;
        case 1003:
            msg = "用户名错误";
            break;
        case 1004:
            msg = "token过期";
            break;
        case 1005:
             msg = "用户购物车为空";
              break;
    }
    return {
        code,
        data,
        msg
    }
}

module.exports = {
    Enum
}