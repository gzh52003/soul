import React, { useState } from 'react'
import { List, InputItem, Toast, Button, Flex, NavBar, Icon,DatePicker } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import '../static/reg.css'
import request from '../utils/request';
export default function Reg(props) {
  let [newUser, newUserShow] = useState(false)
  let [myName, changeName] = useState('')
  let [psw,changePsw] = useState('')
  let [phoneNum,getphoneNum] = useState(props.location.search.split('=')[1])
  let [date,changeDate] = useState('')
  const regBtn = async () => {   
    //获取输入的value验证码
    let input = document.querySelector('input').value
    //发起请求注册账户
    const { code } = await request.post('/regsms', {
      phoneNum: phoneNum,
      yzm: input
    })
    if (code===1001) {
      //新注册用户：跳转到填写用户表格页面
      newUserShow(newUser = true)
    } else {
      Toast.fail('验证码错误，请重新输入', 3);
    }
  }
  const goback = () => {
    props.history.push('/login')
  }

  const nameInp = (e) => {
    changeName(myName = e)
  }
  const pswInp = (e)=>{
    changePsw(psw = e)
  }
  const dataInp = (e)=>{
    changeDate(date=e)
    //转成时间戳
    date = new Date(e).valueOf()
   
  }
  const takeValue = async()=>{
    //获取用户名，密码，手机号，并在数据库中添加一条数据
    console.log(myName,psw,phoneNum,date)
    const {data} = await request.post('/reg',{
      phoneNum,
      username:myName,
      password:psw,
      birthday:date
    })
    //进入个人信息页
    localStorage.setItem('userInfo',JSON.stringify(data))
    props.history.push('/mine')
  }
  return (
    <>
      <div onClick={goback} style={{ zIndex: 99999, position: 'absolute' }}>
        <Icon type="left" style={{ position: 'absolute', left: '10px', top: '10px', color: '#25d4d0', width: '30px', display: 'inline-block', }} />
        <span style={{ position: 'absolute', left: '36px', top: '13px', color: '#25d4d0', width: '100px', display: 'inline-block' }}>返回上一级</span>
      </div>
      <div style={{ background: 'url(./assets/img/img-video.webp) no-repeat center center/cover', width: '100%', height: '100%' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0,0,0,0.7)"
        }}></div>

        {newUser ? <List>
          <InputItem
            type="text"
            placeholder="请输入你的名字"
            onChange={nameInp}
          >名字</InputItem>
          <InputItem
            type="text"
            placeholder="请输入你的密码"
            onChange={pswInp}
          >密码</InputItem>
       <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={date}
          onChange={dataInp}
        >
          <List.Item arrow="horizontal">生日</List.Item>
        </DatePicker>

          <Button onClick={takeValue} type="primary" inline style={{ marginRight: '4px', backgroundColor: '#25d4d0' }}>进入soul！</Button>
        </List>
          : <div className='smsTitle'>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <InputItem
                type="text"
                placeholder="请在这里输入验证码"
                maxLength='4'
                className='value1'
              >验证码
                <span style={{ background: 'url(./assets/img/密码.svg) no-repeat 6px 6px', backgroundSize: '20px 20px', width: '25px', height: '25px', display: 'inline-block' }}></span>
              </InputItem>
            </div>

            <p className="senToPhone">已发送验证码至<span>{props.location.search.split('=')[1]}</span></p>
            <p>
              {/* 发送验证码按钮 */}
              <Button type="primary" inline style={{ marginRight: '4px', backgroundColor: '#25d4d0' }} className='sendSms' onClick={regBtn}>注册</Button>
            </p>
          </div>}

      </div>
    </>
  )


}