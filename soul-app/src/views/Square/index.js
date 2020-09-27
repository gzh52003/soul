import React,{useState, useCallback, useEffect} from 'react'
import HeaderNav from '#/HeaderNav'
import '../../static/css/Square.scss'
import {SearchBar,Icon,Popover,NavBar} from 'antd-mobile'
import '../../static/css/common.scss'
import request from '../../utils/request'
import formatTime from '../../utils/formatTime'
const Item = Popover.Item
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export default function Square(props){
    const [title] = useState('广场')
    const [tabs] = useState([{
      title:'关注',
      key:'focus',
    },{
      title:'推荐',
      key:'recommend'
    },{
      title:'最新',
      key:'newest'
    }])
    const Search = useCallback(()=>{
      props.history.push('/Search')
    },[])
  let [visible,change] =useState(false);
  let [dataList,addData] = useState([])
   const handleVisibleChange = useCallback((visible)=>{
        change(visible=visible)
        //visible=visible;
        console.log("123",visible);
   },[])                              
   useEffect( ()=>{
    ( async function getData(){
      const result = await request.get('/Moment');
      addData(dataList = result.data)
     })()
   },[])
   const onSelect = useCallback((opt)=>{
     change(visible=false);
   })
   const show = useCallback(()=>{
     console.log(1);
   })
   const Ellipisis = useCallback(()=>{
     console.log(1);
   },[])
   const goto = useCallback((id)=>{
      props.history.push(`/Detail/${id}`)
   },[])
   const thumbs = useCallback((_id)=>{
    console.log(_id);
   })
    return(
        <>
          <HeaderNav title={title} tab={tabs}/> 
           <SearchBar placeholder="大家都在搜，你该什么时候存钱了" 
           onFocus={Search}
           >
           </SearchBar>
            <ul className='Moment'>
              {
                dataList.map(item=>( <li className='MomentList' key={item._id}>
                <div className='MomentUser-row clear' >
                    <div className='avatar'>
                      <img src='./assets/img/iuu.jpg'></img>
                    </div>
                    <div className='describe'>
                       <span className='from'>来自艺术星球</span>
                       <span className='time'>{formatTime(item.creTime)}</span>
                    </div>
                    <div className='share' >
                        <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={visible}
                        overlay={[
                          (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">发现</Item>),
                          (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>加微信鸭</Item>),
                          (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                            <span style={{ marginRight: 5 }}>私聊</span>
                          </Item>),
                        ]}
                        align={{
                          overflow: { adjustY: 0, adjustX: 0 },
                          offset: [-10, 0],
                        }}
                        onVisibleChange={()=>{console.log("asdfsf",handleVisibleChange);}}
                        onSelect={onSelect}
                      >
                        <div style={{
                          height: '100%',
                          padding: '0 15px',
                          marginRight: '-15px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        >
                          <Icon type="ellipsis" onClick={Ellipisis}/>
                        </div>
                      </Popover>
                    </div>
                </div>
                <div className='Moment-Content ' onClick={()=>{goto(item._id)}}>
                       <div><img src='http://localhost:10000/assets/instantsImg/testImg/宝可梦.jpg'></img></div> 
                       <p className='content'>{item.context}</p>
                       <div className='location'><img src={item.location}></img>广州市</div>
                       <div className='option'>
                       <img src='./assets/img/分享.svg'></img>
                       {item.thumbs.length===0?<img src='./assets/img/爱心.svg' className='LikeIcon' ></img>:<img src='./assets/img/heart_red.svg' className='LikeIcon' ></img>}
                       
                       <span className='Like'>{item.thumbs.length}</span>
                       <img src='./assets/img/评论.svg' className='commentIcon'></img>
                       <span className='comment'>{item.comments.length} </span>
                       </div>
                </div>
                </li>
))
              }
            </ul>

        </>
    )
}