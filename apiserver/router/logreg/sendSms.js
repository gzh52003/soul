const express = require('express')
const router = express.Router()
const {
    Enum
} = require("../../utils/Enum");
const Core = require('@alicloud/pop-core');

router.get("/",(req,res)=>{
    const {
        phoneNum
    } = req.query

    let randomNum = (parseInt((Math.random() * 9900) + 100)).toString();
        randomNum = randomNum.padStart(4, '0');
        const TemplateParam = `{"code":${randomNum}}`
        req.session.Sms = randomNum
        var client = new Core({
            accessKeyId: 'LTAI4G2vNjhrGTESjtA9axB6',
            accessKeySecret: 'QFNGnTnhvR5P1GDMZFz9ahFPm6zWwm',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });
        var params = {
            "RegionId": "cn-hangzhou",
            "PhoneNumbers": phoneNum ,
            "SignName": "ugoshop",
            "TemplateCode": "SMS_201715882",
            "TemplateParam": TemplateParam
        }
        var requestOption = {
            method: 'POST'
        };
        client.request('SendSms', params, requestOption).then(() => {
            res.send(Enum(1001,{},"短信验证码发送成功"));
        }, (ex) => {
            //console.log(ex);
            res.send(Enum(1002,{}));
        })
})

module.exports = router;