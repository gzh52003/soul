import React,{useState, useCallback, useEffect} from 'react'
import HeaderNav from '#/HeaderNav'
import '../../static/css/Square.scss'
import {SearchBar,Icon,Popover,NavBar} from 'antd-mobile'
import $ from 'jquery'
import '../../static/css/common.scss'
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
   const handleVisibleChange = useCallback((visible)=>{
        visible=visible;
        console.log(visible);
   },[])
   useEffect(()=>{
     const data = 
   })
   const onSelect = useCallback((opt)=>{
     change(visible=false);
     console.log((opt.props.value));
   })
   const show = useCallback(()=>{
     console.log(1);
   })
    return(
        <>
          <HeaderNav title={title} tab={tabs}/> 
           <SearchBar placeholder="大家都在搜，你该什么时候存钱了" 
           onFocus={Search}
           >
           </SearchBar>
            <ul className='Moment'>
                <li className='MomentList'>
                    <div className='MomentUser-row clear' >
                        <div className='avatar'>
                          <img src='./assets/img/iuu.jpg'></img>
                        </div>
                        <div className='describe'>
                           <span className='from'>来自艺术星球</span>
                           <span className='time'>刚刚推荐</span>
                        </div>
                        <div className='share' >
                            <Popover mask
                            overlayClassName="fortest"
                           
                            overlayStyle={{ color: 'currentColor' }}
                            visible={visible}
                            overlay={[
                              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                <span style={{ marginRight: 5 }}>Help</span>
                              </Item>),
                            ]}
                            align={{
                              overflow: { adjustY: 0, adjustX: 0 },
                              offset: [-10, 0],
                            }}
                            onVisibleChange={handleVisibleChange}
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
                              <Icon type="ellipsis" />
                            </div>
                          </Popover>
                        </div>
                    </div>
                    <div className='Moment-Content '>
                           <div><img src='./assets/img/豪车3.jpg'></img></div> 
                           <div className='location'><img src='./assets/img/地址.svg'></img>广州市</div>
                           <div className='option'>
                           <img src='./assets/img/分享.svg'></img>
                           <img src='./assets/img/爱心.svg' className='LikeIcon'></img>
                           <span className='Like'>22</span>
                           <img src='./assets/img/评论.svg' className='commentIcon'></img>
                           <span className='comment'>44 </span>
                           </div>
                    </div>
                    </li>

                    <li className='MomentList'>
                    <div className='MomentUser-row clear' >
                        <div className='avatar'>
                          <img src='./assets/img/iuu.jpg'></img>
                        </div>
                        <div className='describe'>
                           <span className='from'>来自艺术星球</span>
                           <span className='time'>刚刚推荐</span>
                        </div>
                        <div className='share' >
                            <Popover mask
                            overlayClassName="fortest"
                           
                            overlayStyle={{ color: 'currentColor' }}
                            visible={visible}
                            overlay={[
                              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                <span style={{ marginRight: 5 }}>Help</span>
                              </Item>),
                            ]}
                            align={{
                              overflow: { adjustY: 0, adjustX: 0 },
                              offset: [-10, 0],
                            }}
                            onVisibleChange={handleVisibleChange}
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
                              <Icon type="ellipsis" />
                            </div>
                          </Popover>
                        </div>
                    </div>
                    <div className='Moment-Content '>
                           <div><img src='./assets/img/豪车3.jpg'></img></div> 
                           <div className='location'><img src='./assets/img/地址.svg'></img>广州市</div>
                           <div className='option'>
                           <img src='./assets/img/分享.svg'></img>
                           <img src='./assets/img/爱心.svg' className='LikeIcon'></img>
                           <span className='Like'>22</span>
                           <img src='./assets/img/评论.svg' className='commentIcon'></img>
                           <span className='comment'>44 </span>
                           </div>
                    </div>
                    </li>

                    <li className='MomentList'>
                    <div className='MomentUser-row clear' >
                        <div className='avatar'>
                          <img src='./assets/img/iuu.jpg'></img>
                        </div>
                        <div className='describe'>
                           <span className='from'>来自艺术星球</span>
                           <span className='time'>刚刚推荐</span>
                        </div>
                        <div className='share' >
                            <Popover mask
                            overlayClassName="fortest"
                           
                            overlayStyle={{ color: 'currentColor' }}
                            visible={visible}
                            overlay={[
                              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                <span style={{ marginRight: 5 }}>Help</span>
                              </Item>),
                            ]}
                            align={{
                              overflow: { adjustY: 0, adjustX: 0 },
                              offset: [-10, 0],
                            }}
                            onVisibleChange={handleVisibleChange}
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
                              <Icon type="ellipsis" />
                            </div>
                          </Popover>
                        </div>
                    </div>
                    <div className='Moment-Content '>
                           <div><img src='./assets/img/豪车3.jpg'></img></div> 
                           <div className='location'><img src='./assets/img/地址.svg'></img>广州市</div>
                           <div className='option'>
                           <img src='./assets/img/分享.svg'></img>
                           <img src='./assets/img/爱心.svg' className='LikeIcon'></img>
                           <span className='Like'>22</span>
                           <img src='./assets/img/评论.svg' className='commentIcon'></img>
                           <span className='comment'>44 </span>
                           </div>
                    </div>
                    </li>
            </ul>

        </>
    )
}