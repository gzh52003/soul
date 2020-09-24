import React, { useCallback, useEffect } from 'react'
import {SearchBar,NavBar,Icon,Flex} from 'antd-mobile'
import '../../static/css/Search.scss'
import '../../static/css/common.scss'
import $ from 'jquery'
import throttle from '../../utils/throttle'
export default function Search(props){
    
    useEffect(()=>{
        const NavHeight = $('.Nav').height()
        function sticky(){
            if($(window).scrollTop()>NavHeight){
                $('.Nav').css({
                    position:'fixed',
                    top:0
                })
            }else{
                $('.Nav').css({
                    position:'relative',
                })
            }
           
        }
        $(window).scroll(throttle(
            sticky
        ))},[])
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
        className='Nav'
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
          <div className='hot'>
            <div className='hot-tit'>
                <span className='hot-title'>热门搜索</span>
                <img src='./assets/img/热门.svg'></img>
            </div>
            <ul className='hotList'>
                <li>
                    <div className='No'>1</div>
                    <div className='hot-content'>
                        <p className='question'>如何拒绝不熟悉的朋友 <img src='./assets/img/热点.svg'></img></p>
                        <p className='detail'>拜托，我们不熟</p>
                    </div>
                    <span className='hotNum'>256w热度</span>
                </li>

                <li>
                <div className='No'>1</div>
                <div className='hot-content'>
                    <p className='question'>如何拒绝不熟悉的朋友 <img src='./assets/img/热点.svg'></img></p>
                    <p className='detail'>拜托，我们不熟</p>
                </div>
                <span className='hotNum'>256w热度</span>
            </li>

            <li>
            <div className='No'>1</div>
            <div className='hot-content'>
                <p className='question'>如何拒绝不熟悉的朋友 <img src='./assets/img/热点.svg'></img></p>
                <p className='detail'>拜托，我们不熟</p>
            </div>
            <span className='hotNum'>256w热度</span>
        </li>

        <li>
        <div className='No'>1</div>
        <div className='hot-content'>
            <p className='question'>如何拒绝不熟悉的朋友 <img src='./assets/img/热点.svg'></img></p>
            <p className='detail'>拜托，我们不熟</p>
        </div>
        <span className='hotNum'>256w热度</span>
    </li>

    <li>
    <div className='No'>1</div>
    <div className='hot-content'>
        <p className='question'>如何拒绝不熟悉的朋友 <img src='./assets/img/热点.svg'></img></p>
        <p className='detail'>拜托，我们不熟</p>
    </div>
    <span className='hotNum'>256w热度</span>
</li>

<li>
<div className='No'>1</div>
<div className='hot-content'>
    <p className='question'>如何拒绝不熟悉的朋友 <img src='./assets/img/热点.svg'></img></p>
    <p className='detail'>拜托，我们不熟</p>
</div>
<span className='hotNum'>256w热度</span>
</li>

<li>
<div className='No'>1</div>
<div className='hot-content'>
    <p className='question'>如何拒绝不熟悉的朋友 <img src='./assets/img/热点.svg'></img></p>
    <p className='detail'>拜托，我们不熟</p>
</div>
<span className='hotNum'>256w热度</span>
</li>
            </ul>
          </div>
        </div>
        </div>
    )
   
}