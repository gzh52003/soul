import React from 'react'
import {NavBar,Icon,Tabs, Flex} from 'antd-mobile'
import {Sticky,StickyContainer} from 'react-sticky'

function renderTabBar(props) {
    return (<Sticky>
      {() => <div style={{ display:Flex,justifyContent:"space-between",zIndex:1 }}><Tabs.DefaultTabBar {...props} /></div>}
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
          
           <Tabs tabs={props.tab} initialPage={1} animated={false} useOnPan={false}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
        </Tabs>
          
            </NavBar>
        </div>)
}