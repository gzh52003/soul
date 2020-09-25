import React from 'react'
import {NavBar,Icon,Tabs, Flex} from 'antd-mobile'
import {Sticky,StickyContainer} from 'react-sticky'
function renderTabBar(props) {
    return (<Sticky>
      {() => <div style={{ display:Flex,justifyContent:"space-between",paddingTop:0 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
export default function HeaderBar(props){
    return(
        <div className="Square-wrap">
            <NavBar
            mode="light"
            icon={<div style={{
                width: '30px',
                height: '30px',
                background: `url(./assets/img/avatar.svg) center center /  30px 30px no-repeat` }}
                />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="0"  style={{ marginRight: '8px',background: `url(./assets/img/音乐.svg) center center /  21px 21px no-repeat`  }} />,
            ]}
            >
            <StickyContainer  style={{paddingTop:0}}>
            <Tabs tabs={props.tab}
          
                renderTabBar={renderTabBar}
            >
                
            </Tabs>
            </StickyContainer>
            </NavBar>
        </div>)
}