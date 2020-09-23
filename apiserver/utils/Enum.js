function Enum(code = 1001, data = [], msg = "success") {
    switch (code) {
        case 1001:
            break;
        case 1002:
            msg = "fail";
            break;
        default:
            msg = msg || "其他类型错误";
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