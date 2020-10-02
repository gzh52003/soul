const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const mongo = require('../../utils/mongo');
const { Enum } = require('../../utils/Enum')


// 配置上传参数
let storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './uploads/');
    // },

    // 上传文件保存目录，无则自动创建
    destination: path.join(__dirname, '../public/uploads/'),

    // 格式化文件名：字段名+时间戳+扩展名
    // avatar-1597202347355.jpg
    filename: function (req, file, cb) {
        // 获取文件后缀名
        let ext = path.extname(file.name);
        console.log(file);
        cb(null, file.name + '-' + Date.now() + ext);
    }
})

// 设置中间件
const uploadMiddleware = multer({ storage });


// post /api/upload/avatar
router.post('/avatar', uploadMiddleware.single('avatar'), (req, res) => {
    // 中间件会把图片信息格式化到req.file,req.files
    console.log('file=', req.files, req.body);
    const { _id } = req.body;
    // 更新用户信息
    const avatarUrl = '/uploads/' + req.file.name
    mongo.updateById('instantsList', { _id }, { $set: { avatarUrl } })

    res.send(Enum(1001,[],'上传成功'));
})

// 一次性最多传5张图片
router.post('/goods', uploadMiddleware.array('goods', 5), (req, res) => {

})

module.exports = router;