import React, { useEffect, useState, useContext, useCallback } from 'react'
import {NavBar,Icon,Toast,ActionSheet,ImagePicker} from 'antd-mobile'
import '../../static/css/Square.scss'
import '../../static/css/common.scss'
import request from '../../utils/request'
import formatTime from '../../utils/formatTime'
export default function detail(props){
    let [data,addData] = useState([])
    let [LikeCount,changeLike] = useState(0)
    useEffect(()=>{
        (async function(){
           const result=await request.get('/Moment/'+props.match.params.id)
          addData(data=result.data)
          changeLike(LikeCount=data[0].thumbs.length)
        })()
    },[])
    const thumbs = useCallback(async(_id)=>{
        console.log(_id);
        const result = await request.post('/Moment/thumbs',{
            _id,
            userId:'5f6c5c4d4db5d900c0ba5b54'
        })
        if(result.code===1001){
            Toast.success('点赞成功', 1)
            changeLike(LikeCount+1)
        }
        if(result.code===1004){
            Toast.fail('请勿重复点赞', 1);
        }
    })
    const [shareList] = useState([ 
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' }]
        .map(obj => ({
            icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
            title: obj.title,
          })))
    const showShareActionSheet  =useCallback(()=>{
        ActionSheet.showShareActionSheetWithOptions({
            options: shareList,
            // title: 'title',
            message: 'I am description, description, description',
          },
          (buttonIndex) => {
            // also support Promise
            return new Promise((resolve) => {
              Toast.info('分享成功');
              setTimeout(resolve, 500);
            });
          });
    },[])
     return(
         <div>
      
                <NavBar
                mode="light"
                icon={<Icon type="left" style={{color:'#000'}}/>}
                onLeftClick={() => {props.history.goBack()}}
                rightContent={[
                <Icon key="0" type="ellipsis" style={{color:'#000'}}/>,
                ]}
            >瞬间</NavBar>
            {
                data.map(item=>( <div className='Moment' key={item._id  }> <li className=' MomentList' >
                <div className='MomentUser-row clear' >
                    <div className='avatar'>
                      <img src='./assets/img/iuu.jpg'></img>
                    </div>
                    <div className='describe'>
                       <span className='owner'>楼主</span>
                       <span className='time'>{formatTime(item.creTime)}</span>
                    </div>
                    <div className='share' >
                        <div className='talk'>私聊</div>
                    </div>
                </div>
                <div className='Moment-Content'>
                         <p className='content'>{item.context}</p>
                       <div><img src='http://localhost:10000/assets/instantsImg/testImg/宝可梦.jpg'></img></div> 
                       <div className='location'><img src={item.location}></img>广州市</div>
                       <div className='option'>
                       <img src='./assets/img/分享.svg' onClick={showShareActionSheet}></img>
                       {item.thumbs.includes('5f6c5c4d4db5d900c0ba5b54')?<img src='./assets/img/heart_red.svg' className='LikeIcon' ></img>:<img src='./assets/img/爱心.svg' className='LikeIcon' ></img>}
                      
                       <span className='Like' onClick={()=>thumbs(item._id)}>{LikeCount}</span>
                       <img src='./assets/img/评论.svg' className='commentIcon'></img>
                       <span className='comment'>{item.comments.length} </span>
                       </div>
                </div>
                </li>
                </div>))
            }
         <div className='comment'>
         </div>
        </div>)

    
}