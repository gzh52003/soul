const crypto = require('crypto');

function md5(data,privateKey='dandan'){

    const hash = crypto.createHash('md5');
    hash.update(data+privateKey); // 加盐 盐值
    const result = hash.digest('hex');

    return result;
}
module.exports = {
    md5
}