import React, { useCallback, useState } from 'react'
import { NavBar, Icon, List, ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import '../static/more.css'



export default function More(props) {
  const Item = List.Item;
  const Brief = Item.Brief;
  const list2 = [
    {
      title: '新消息通知',
      icon: './assets/img/铃铛.svg',
    },
    {
      title: '隐私',
      icon: './assets/img/锁.svg',
    },
    {
      title: '辅助功能',
      icon: './assets/img/链接.svg',
    },
  ]
  
  const sidebar = (<List>
    {[0, 1, 2, 3].map((i, index) => {
      if (index === 0) {
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          multipleLine
        >Category</List.Item>);
      }
      return (<List.Item key={index}
        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
      >Category{index}</List.Item>);
    })}
  </List>);

  const showActionSheet  = useCallback(() => {
    const BUTTONS = ['退出登录',  '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      maskClosable: true,
      'data-seed': 'logId',
    },
    (buttonIndex) => {
      // this.setState({ clicked: BUTTONS[buttonIndex] });
      if(BUTTONS[buttonIndex]==='退出登录'){
        console.log(props)
        props.history.push('/Login')
      }
    });
   
  })

  return (

    <div>
      
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >设置</NavBar>

      <List className="my-list">
        <Item style={{ background: 'url(./assets/img/我的.svg) no-repeat 10px', backgroundSize: '20px 20px' }} arrow="horizontal" multipleLine onClick={() => { }}>
          <span className='item_text'>账户与安全</span>
        </Item>
      </List>

      <List className="my-list">
        {
          list2.map(item => {
            return (
              <Item style={{ background: `url(${item.icon}) no-repeat 10px`, backgroundSize: '20px 20px' }} arrow="horizontal" multipleLine onClick={() => { }}>
                <span className='item_text'>{item.title}</span>
              </Item>
            )
          })
        }
      </List>

      <List className="my-list">

        <Item style={{ background: `url(./assets/img/钱包.svg) no-repeat 10px`, backgroundSize: '20px 20px' }} arrow="horizontal" multipleLine onClick={() => { }}>
          <span className='item_text'>soul币充值</span>
        </Item>

        <Item style={{ background: `url(./assets/img/点赞.svg) no-repeat 10px`, backgroundSize: '20px 20px' }} arrow="horizontal" multipleLine onClick={() => { }}>
          <span className='item_text'>推荐soul</span>
          <span style={{ fontSize: '13px', color: '#ccc', float: 'right', lineHeight: '25px' }}>推荐好友得soul币</span>
        </Item>

      </List>

      <List className="my-list">

        <Item style={{ background: `url(./assets/img/问号.svg) no-repeat 10px`, backgroundSize: '20px 20px' }} arrow="horizontal" multipleLine onClick={() => { }}>
          <span className='item_text'>帮助与反馈</span>
        </Item>

        <Item style={{ background: `url(./assets/img/关于.svg) no-repeat 10px`, backgroundSize: '20px 20px' }} arrow="horizontal" multipleLine onClick={() => { }}>
          <span className='item_text'>关于soul</span>
          <span style={{ fontSize: '13px', color: '#ccc', float: 'right', lineHeight: '25px' }}>版本3.49.1</span>
        </Item>

      </List>


      <List className="my-list" onClick={() => {
        showActionSheet ()
      }}>
        <Item style={{ background: 'url(./assets/img/退出登录.svg) no-repeat 10px', backgroundSize: '20px 20px' }} arrow="horizontal" multipleLine >
          <span className='item_text' >退出</span>
        </Item>

      </List>


    </div>
  )
}