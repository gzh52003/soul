import React from 'react'
import '../static/login.css'
import { List, InputItem, Toast, Button, Flex, NavBar, Icon } from 'antd-mobile';
export default class Login extends React.Component {
  state = {
    hasError: false,
    value: '',
    disabled: true,
    userInfo: [],
    inputPasswordShow: false
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确的手机号格式');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
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
  inputPhoneNumber = () => {
    const { userInfo, value, inputPasswordShow } = this.state
    this.setState({
      userInfo: [{ phoneNumber: value }],
      inputPasswordShow: true,
      value: ''
    });
  }
  inputPassword = () => {
    const { userInfo, value, inputPasswordShow } = this.state
    // console.log(value)
    this.setState({
      userInfo: [...userInfo, { password: value }]
    })
    console.log(userInfo)
  }
  render() {
    const { disabled, inputPasswordShow } = this.state
    return (

      <div style={{ background: 'url(./assets/img/img-video.webp) no-repeat center center/cover', width: '100%', height: '100%' }}>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0,0,0,.7)"
        }}>
          {
            inputPasswordShow ? <div >
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
          inputPasswordShow ? <><List>
            <InputItem
              type="phone"
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
              <Flex.Item className='login_sms'>验证码登录</Flex.Item>
            </Flex>

            <Button onClick={this.inputPassword} disabled={disabled} type="primary" inline style={{ marginRight: '4px', backgroundColor: '#25d4d0' }}>确定</Button>
          </> : <><List>
            <InputItem
              type="phone"
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


      </div>
    )
  }

}