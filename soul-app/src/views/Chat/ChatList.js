import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default function ChatList(){
    return(
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="ellipsis" />
      ]}
    >聊天</NavBar>
    )
}
