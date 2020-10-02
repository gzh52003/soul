import React,{Suspense} from 'react';
import './App.css';
import { withRouter,Switch } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './static/css/common.scss'
@withRouter
class App extends React.Component {
  state = {
    selectedTab: '/Square',
    hidden: false,
    fullScreen: true,
    show:true,
    TabBarList :[{
      name:'planet',
      title:'星球',
      icon:'./assets/img/星球.svg',
      active:'./assets/img/星球_active.svg',
      path:'/Home'
    },{
      name:'square',
      title:'广场',
      icon:'./assets/img/广场.svg',
      active:'./assets/img/广场_active.svg',
      path:'/Square'
    },{
      name:'publish',
      title:'发布',
      icon:'./assets/img/发布.svg',
      active:'./assets/img/发布.svg',
      path:'/Publish'
    },{
      name:'chat',
      title:'聊天',
      icon:'./assets/img/聊天.svg',
      active:'./assets/img/聊天_active.svg',
      path:'/Chat'
    },{
      name:'mine',
      title:'我的',
      icon:'./assets/img/mine.svg',
      active:'./assets/img/mine_active.svg',
      path:'/Mine'
    }]
  }
  goto=(path)=>{
    this.setState({
      selectedTab:path
    })
    this.props.history.push(path)
  }
  componentDidMount(){
    if(this.props.location.pathname==='/'){
      this.setState({
        selectedTab:this.state.selectedTab
      })
    }else{
      this.setState({
        selectedTab:this.props.history.location.pathname
      })
    }
   
  }
  render() {
    const {TabBarList,show} = this.state
    const {location} = this.props
    const hideTabBar = ['/Login','/Search','/Publish']
    // const reg = /^\/Detail/
    // console.log(location.pathname,reg.test(location.pathname));
    if(!hideTabBar.includes(location.pathname)){
      return (
      <>

      {/* <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: "100%" }}> */}
      <div style={ { position: 'fixed', height: '8%', width: '100%', bottom: 0 }}>
      {/* <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: "100%" }}> */}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}>
          {TabBarList.map(item=>(
            <TabBar.Item
            title={item.title}
            key={item.title}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${item.icon}) center center /  21px 21px no-repeat` }}
              />
            }
            selected={this.state.selectedTab === item.path}
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${item.active}) center center /  21px 21px no-repeat` }}
              />
            }
            
            badge={0}
            onPress={() => {
             this.goto(item.path);
            }}
            data-seed="logId"
            >
            </TabBar.Item>))}
        </TabBar>
      </div>
     </>
      );
    }else{
      return ''
    }
    

  }
}
export default App;