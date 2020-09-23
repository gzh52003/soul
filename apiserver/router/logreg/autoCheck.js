const express = require('express')
const router = express.Router()
const {
    find,
} = require("../../utils/mongo")
const {
    Enum
} = require("../../utils/Enum");
const Core = require('@alicloud/pop-core');


router.get("/", async (req, res) => {
    const {
        phoneNum
    } = req.query;
    //console.log("phoneNum=",phoneNum);
    const user = await find("userList", {
        phoneNum
    })
    if(user.length === 1){
        let data = {
            hasUser:true
        }
        res.send(Enum(1001,data))
    }else if(user.length === 0){
        let data = {
            hasUser:false
        }
        let randomNum = (parseInt((Math.random() * 9900) + 100)).toString();
        randomNum = randomNum.padStart(4, '0');
        const TemplateParam = `{"code":${randomNum}}`
        console.log("");
        req.session.Sms = randomNum//
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
            res.send(Enum(1001,data,"用户不存在且已成功发送短信验证码"));
        }, (ex) => {
            console.log(ex);
        })
    }else{
        res.send(Enum(1003,{},"数据库发现同号码用户,数据库异常"))
    }
})

module.exports = router