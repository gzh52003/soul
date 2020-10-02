import React from 'react'
import { NavBar, Icon, Button, Flex, Card, WingBlank, WhiteSpace, Popover, List, TextareaItem,Toast } from 'antd-mobile';
import request from '../utils/request';
import '../static/mine.css'

export default class Mine extends React.Component {

  state = {
    navBarFix: false,
    navBarEle: null,
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).userData : {},
    creTime: '000',
    visible: true,
    selected: '',
    changeNameBtn: false,
    myName:''
  }


  onSelect = (opt) => {

    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  componentDidMount() {
    this.state.navBarEle = document.querySelector('.am-navbar')
    //获取的当天时间戳
    const res1 = Date.now()
    //把创建账号的时间戳转化成日期格式
    var time = new Date(parseInt(this.state.userInfo.creTime));
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    let res = y + '-' + (m) + '-' + (d) + ' ' + (h) + ':' + (mm) + ':' + (s);
    this.setState({
      creTime: res
    })
    console.log(Math.ceil((res1 - this.state.userInfo.creTime) / (60 * 60 * 24) / 1000))
    
  }
  changeName = () => {
    console.log('changeName')
    this.setState({
      changeNameBtn: true,
    });
  }
  inputName=(e)=>{
    this.setState({
      myName:e
    })
  }
  finish=async()=>{
    //获得myName，发起请求，
    const {myName,userInfo} = this.state
    console.log('finish')
    const _id = JSON.parse(localStorage.getItem('userInfo')).userData._id
    console.log(_id)
    const {data} = await request.post('/changeName',{
      _id,myName
    })
    this.setState({
      userInfo:data.userData
    })
    localStorage.setItem('userInfo',JSON.stringify(data))
      Toast.success('修改成功!!', 1,()=>{
        this.setState({
          changeNameBtn: false,
        });
      }); 
      
  }
  render() {

    const { userInfo, creTime, changeNameBtn } = this.state
    return (
      <div>
        {changeNameBtn ? <div>
          <NavBar
            style={{ zIndex: 1324, position: 'relative' }}
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.setState({ changeNameBtn: false })}

            rightContent={[
              <span onClick={this.finish}>确认修改</span>
            ]}
          >用户名修改</NavBar>
          
          <List>
         <TextareaItem
              placeholder='请输入用户名'
              onBlur={this.inputName}
              rows={5}
              count={100}
            />
         </List>
       
        </div> :
          <div>
            <section className='userInfo_wrap' style={{ background: 'url(../assets/img/bgc_mine.jpg) no-repeat ', backgroundSize: '100% 100%' }}>
              {/* 导航栏 */}
              <NavBar
                mode="light"
                rightContent={[
                  <span onClick={() => { this.props.history.push('/more') }} style={{ marginRight: '-6px', position: 'absolute', zIndex: 1234, color: '#fff', fontSize: '12px' }}>设置</span>
                ]}
              >
                <div style={{ display: 'inline-block', color: '#fff', position: 'relative', left: '-82px', border: '1px solid #fff', padding: '3px 12px', borderRadius: '18px', fontSize: '12px', lineHeight: '16px', background: 'rgba(0,0,0,0.5)' }}>
                  <img src='../assets/img/星球1.svg' width='20px' style={{ position: 'relative', left: '-5px', top: '3px' }} />  来自艺术家星球</div>

                <div style={{ display: 'inline-block', color: '#fff', position: 'absolute', right: '48px', border: '1px solid #fff', padding: '3px 12px', borderRadius: '18px', fontSize: '12px' }}>
                  <img src='../assets/img/添加好友.svg' width='18px' style={{ position: 'relative', left: '-5px', top: '3px' }} />加好友</div>

                <div style={{ display: 'inline-block', color: '#fff', position: 'relative', right: '50px', border: '1px solid #fff', padding: '3px 12px', borderRadius: '18px' }}>
                  <img src='../assets/img/金币.svg' width='20px' style={{ position: 'relative', left: '-5px', top: '3px' }} />  5</div>
              </NavBar>

              {/* 个人信息 */}
              <figure className='userInfo_item' >
                <div className='avator'>
                  <img src='../assets/img/avator.jpg' />
                </div>
                <p style={{ margin: '3px 0' }}>{userInfo.userName}
                  <img src='../assets/img/修改.svg' width='20px' style={{ position: 'relative', top: '5px' }} onClick={this.changeName} /></p>
                <p>
                  <span>{Math.ceil((Date.now() - this.state.userInfo.creTime) / (60 * 60 * 24) / 1000)}</span>天，
        <span>{userInfo.instants.length}</span>个瞬间
        </p>
              </figure>

              <NavBar
                style={{ position: 'relative', top: '28px' }}
                mode="light"

                leftContent={[
                  <div style={{ display: 'inline-block', color: '#fff', position: 'relative', left: '0px', border: '1px solid #fff', padding: '3px 12px', borderRadius: '18px', fontSize: '12px', lineHeight: '16px', background: 'rgba(0,0,0,0.5)' }}>
                    <img src='../assets/img/皇冠.svg' width='20px' style={{ position: 'relative', left: '-5px', top: '3px' }} />超级星球</div>
                ]}
                rightContent={[
                  <div>
                    <div style={{ display: 'inline-block', color: '#fff', position: 'relative', left: '-85px', border: '1px solid #fff', padding: '3px 3px', borderRadius: '50%', fontSize: '12px', lineHeight: '16px', background: 'rgba(0,0,0,0.5)' }}>
                      <img src='../assets/img/皇冠.svg' width='20px' style={{ position: 'relative', top: '3px' }} /></div>

                    <div style={{ display: 'inline-block', color: '#fff', position: 'absolute', right: '12px', border: '1px solid #fff', padding: '3px 12px', borderRadius: '18px', fontSize: '12px' }}>
                      <img src='../assets/img/笑脸.svg' width='18px' style={{ position: 'relative', left: '-5px', top: '3px' }} />夸夸墙</div>
                  </div>

                ]}
              >NavBar</NavBar>
            </section>

            <Flex>
              <Flex.Item>
                <p>{userInfo.followed.length}</p>
                <p>关注</p>
              </Flex.Item>
              <Flex.Item className='be_followed'>
                <p>{userInfo.beFollowed.length}</p>
                <p>被关注</p>
              </Flex.Item>
              <Flex.Item>
                <p>0</p>
                <p>谁看过我</p>
              </Flex.Item>
            </Flex>

            {/* 发布过的瞬间 */}
            <WingBlank size="lg">

              {/* <Card>
          <Card.Header
            title="xxxx-xx-xx xx：xx：xx "
            extra={<span>仅自己可见</span>
            }
          />
          
          <Card.Body>
            <img src='../assets/img/bgc_mine.jpg'></img>
            <div>This is content of `Card`</div>
          </Card.Body>
        </Card>
      */}
              <Card style={{ marginBottom: '50px' }}>
                <Card.Header
                  title={creTime}
                  extra={<span>仅自己可见</span>}
                />
                <Card.Body>
                  <div>我出生了</div>
                </Card.Body>
              </Card>
              <WhiteSpace size="lg" />
            </WingBlank>
          </div>
        }

      </div>
    )
  }
}


