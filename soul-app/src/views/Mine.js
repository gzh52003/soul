import React from 'react'
import { NavBar, Icon, Button, Flex, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import '../static/mine.css'
export default class Mine extends React.Component {
  state = {
    navBarFix: false,
    navBarEle: null,
    userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).userData:{},
    creTime: '000'
  }
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
  render() {

    const { userInfo, creTime } = this.state
    console.log(userInfo);

    // window.onscroll = function(){
    //   // let {navBarFix} = this.state
    //   // if(navBarFix){

    //   // }

    //   let eleTop = document.querySelector('.am-wingblank').getBoundingClientRect().top //元素到顶部的距离
    //   if(eleTop<30){
    //     console.log(1)
    //     // this.state.navBarEle.style.position='fixed'
    //     // console.log(this.state.navBarEle)
    //   }
    // }
    return (
      <div>
        <section className='userInfo_wrap' style={{ background: 'url(../assets/img/bgc_mine.jpg) no-repeat ', backgroundSize: '100% 100%' }}>
          {/* 导航栏 */}
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[

              <Button onClick={() => { this.props.history.push('/more') }} type="ghost" inline size="small" style={{ marginRight: '-6px', }}>设置</Button>
            ]}
          >NavBar</NavBar>

          {/* 个人信息 */}
          <figure className='userInfo_item' >
            <div className='avator'>
              <img src='../assets/img/avator.jpg'/>
            </div>
            <p>{userInfo.userName}</p>
            <p>
              <span>{Math.ceil((Date.now() - this.state.userInfo.creTime) / (60 * 60 * 24) / 1000)}</span>天，
          <span>{userInfo.instants.length}</span>个瞬间
          </p>
          </figure>

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

          <Card>
            <Card.Header
              title="xxxx-xx-xx xx：xx：xx "
              extra={<span>仅自己可见</span>}
            />
            <Card.Body>
              <img src='../assets/img/bgc_mine.jpg'></img>
              <div>This is content of `Card`</div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header
              title="xxxx-xx-xx xx：xx：xx "
              extra={<span>仅自己可见</span>}
            />
            <Card.Body>
              <img src='../assets/img/bgc_mine.jpg'></img>
              <div>This is content of `Card`</div>
            </Card.Body>
          </Card>
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

    )
  }

}