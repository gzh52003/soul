import React from 'react'
import { NavBar, Icon, Button, Flex, } from 'antd-mobile';
import '../static/mine.css'
export default function Mine(props) {
  console.log(123,props)

  return (

    <div>
      <section className='userInfo_wrap'>
        {/* 导航栏 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[

            <Button onClick={()=>{props.history.push('/more')}}  type="ghost" inline size="small" style={{ marginRight: '-6px', }}>设置</Button>
          ]}
        >NavBar</NavBar>

          {/* 个人信息 */}
        <figure className='userInfo_item'>
          <div className='avator'>
            
          </div>
          <p>react好难</p>
          <p>
            <span>4</span>天，
            <span>1</span>个瞬间
          </p>
        </figure>

      </section>

      <Flex>
        <Flex.Item>
          <p>0</p>
          <p>关注</p>
        </Flex.Item>
        <Flex.Item>
          <p>0</p>
          <p>被关注</p>
        </Flex.Item>
        <Flex.Item>
          <p>0</p>
          <p>谁看过我</p>
        </Flex.Item>
      </Flex>

      {/* 发布过的瞬间 */}
        


    </div>

  )
}