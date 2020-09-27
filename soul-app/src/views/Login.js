import React from 'react'
import '../static/login.css'
import { List, InputItem, Toast, Button, Flex, NavBar, Icon } from 'antd-mobile';
import request from '../utils/request';

export default class Login extends React.Component {
  state = {
    hasError: false,
    value: '',
    disabled: true,
    phoneNum: '',
    inputPasswordShow: false,
    smsShow: false,
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确的手机号格式');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 1) {
      this.setState({
        hasError: true,
        disabled: true
      });
    } else {
      this.setState({
        hasError: false,
        disabled: false
      });
    }
    this.setState({
      value,
    });

  }
  inputPhoneNumber = async () => {
    const { phoneNum, value, inputPasswordShow } = this.state
    console.log(value)
    this.setState({
      phoneNum: value,
      inputPasswordShow: true,
      value: '',
    });

    //判断这个手机号是否存在数据库
    const { data } = await request.post(`/loginauto`, {
      phoneNum: value
    })
    console.log('phoneCheck', data)
    //存在数据库，跳转到密码页，
    //不存在则跳转到验证码页，新用户需要用手机验证码注册，注册通过后跳转到填写信息的页面
    if (!data.hasUser) {
      console.log(this.props)
      this.props.history.push(`/reg?phoneNum=${value}`)
    }
  }
  goback = () => {
    this.setState({
      inputPasswordShow: false,
      value: this.state.phoneNum
    })
  }

  inputPassword = async () => {
    const { phoneNum, value } = this.state
    let password = value
    const { data } = await request.get(`/loginpass?phoneNum=${phoneNum}&password=${password}`)
    console.log('res', data)
    if (data.verCodeRight) {
      localStorage.setItem('userInfo', JSON.stringify(data))
      this.props.history.replace('/mine')
    } else {
      Toast.fail('密码错误，请重新输入', 3);
    }
  }

  smsLogin = async() => {
    let { phoneNum } = this.state
    this.setState({
      smsShow: true,
      value: '',
      disabled: false
    })
    console.log('这里发送验证码')
    const res = await request.get(`/sendsms?phoneNum=${phoneNum}`)
    console.log(res)
  }

  //返回密码登录
  pswLog = () => {
    this.setState({
      smsShow: false,
      disabled: false,
      value: ''
    })
  }

  //登录按钮
  sendCode = async () => {
    const { value, send, phoneNum } = this.state
    console.log('phonenum', phoneNum)
    console.log('value', value)
    const { data } = await request.get(`/loginsms?phoneNum=${phoneNum}&yzm=${value}`)
    console.log(data)
    if (data.verCodeRight) {
      //跳转到个人页
      localStorage.setItem('userInfo', JSON.stringify(data))
      this.props.history.push('/mine')
    } else {
      //验证码错误
      console.log('验证码错误')
      Toast.fail('验证码错误 !!!', 3);
    }
  }

  render() {
    const { disabled, inputPasswordShow, smsShow } = this.state
    return (
      <div style={{ background: 'url(./assets/img/img-video.webp) no-repeat center center/cover', width: '100%', height: '100%' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0,0,0,0.7)"
        }}>
          {
            inputPasswordShow ? <div onClick={this.goback}>
              <Icon type="left" style={{ position: 'absolute', left: '10px', top: '10px', color: '#25d4d0', width: '30px', display: 'inline-block' }} />
              <span style={{ position: 'absolute', left: '36px', top: '13px', color: '#25d4d0', width: '100px', display: 'inline-block' }}>返回上一级</span>
            </div> : ''
          }


          <div className='content-container'>
            <div className='main-slogan' style={{
              width: '82.4vw',
              height: '19.6vw',
              margin: '0 auto 2.13333vw',
              background: 'url(./assets/img/follow_you.png) no-repeat center center/cover'
            }}></div>
            <div className="main-tip">治愈聊天，有趣温暖真实表达</div>
          </div>
        </div>

        {
          inputPasswordShow ? smsShow ?

            <div className='smsTitle'>
              <div style={{ display: 'flex', justifyContent: 'center' }} >
                <InputItem
                  type="text"
                  placeholder="请在这里输入验证码"
                  error={this.state.hasError}
                  onErrorClick={this.onErrorClick}
                  onChange={this.onChange}
                  value={this.state.value}
                  maxLength='4'
                >验证码
              <span style={{ background: 'url(./assets/img/密码.svg) no-repeat 6px 6px', backgroundSize: '20px 20px', width: '25px', height: '25px', display: 'inline-block' }}></span>
                </InputItem>
              </div>

              <p className="senToPhone">已发送验证码至<span>{this.state.phoneNum}</span></p>
              <p>
                {/* 登录按钮 */}
                <Button disabled={disabled} type="primary" inline style={{ marginRight: '4px', backgroundColor: '#25d4d0' }} className='sendSms' onClick={this.sendCode}>登录</Button>
              </p>

              <p className="pswLog" onClick={this.pswLog}>返回密码登录</p>

            </div>


            : <><List>
              <InputItem
                type="text"
                placeholder="请在这里输入密码"
                error={this.state.hasError}
                onErrorClick={this.onErrorClick}
                onChange={this.onChange}
                value={this.state.value}
              >密码
              <span style={{ background: 'url(./assets/img/密码.svg) no-repeat 6px 6px', backgroundSize: '20px 20px', width: '25px', height: '25px', display: 'inline-block' }}></span>
              </InputItem>
            </List>
              <Flex>
                <Flex.Item className='login_trouble'>登录遇到问题</Flex.Item>
                <Flex.Item className='login_sms' onClick={this.smsLogin}>验证码登录</Flex.Item>
              </Flex>
              <Button onClick={this.inputPassword} disabled={disabled} type="primary" inline style={{ marginRight: '4px', backgroundColor: '#25d4d0' }}>确定</Button>
            </> :


            <><List>
              <InputItem
                type="number"
                placeholder="手机号"
                error={this.state.hasError}
                onErrorClick={this.onErrorClick}
                onChange={this.onChange}
                value={this.state.value}
              >手机号码</InputItem>
            </List>
              <Button onClick={this.inputPhoneNumber} disabled={disabled} type="primary" inline style={{ marginRight: '4px', backgroundColor: '#25d4d0' }}>确定</Button>
            </>
        }
        {
          inputPasswordShow ? '' : <footer className='foot'>登录注册即代表同意
          <span>soul用户协议</span>和
          <span>隐私政策</span>
          </footer>
        }

      </div>
    )
  }

}