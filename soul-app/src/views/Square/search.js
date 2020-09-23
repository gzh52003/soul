import React, { useCallback } from 'react'
import {SearchBar,NavBar,Icon,Flex} from 'antd-mobile'
import '../../static/css/Search.scss'
import '../../static/css/common.scss'
import $ from 'jquery'
console.log($);
export default function Search(props){
    const goto = useCallback(()=>{
        props.history.goBack();
    },[])
    return(
        <div className='Search-wrap'>
        <NavBar
        style={{position:"relative",zIndex:1000}}
        mode='light'
        icon={<Icon type='left'style={{color:'#000'}}/>}
        onLeftClick={() => goto()}
      
        rightContent={<div style={{color:'#000'}} >搜索</div>}
        >
        <SearchBar placeholder="开启你的探索之旅" className='Search' showCancelButton={false}
           />
        </NavBar>
        <div className='content'>
            <div className='history-title clear'>
                <h5 className='history-logo'>搜索历史</h5>   
                <div className='icon-trash'>
                <img src='./assets/img/垃圾桶.svg'></img>
                </div>
            </div>
            <Flex>
            <Flex.Item className='placeholder'>coder</Flex.Item>
            <Flex.Item className='placeholder'>why</Flex.Item>

          </Flex>
        </div>
        </div>
    )
}