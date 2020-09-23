import React,{useState, useCallback} from 'react'
import HeaderNav from '#/HeaderNav'
import '../../static/css/Square.scss'
import {SearchBar} from 'antd-mobile'
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
    return(
        <>
          <HeaderNav title={title} tab={tabs}/> 
           <SearchBar placeholder="大家都在搜，你该什么时候存钱了" 
           onFocus={Search}
           >
           </SearchBar>
        </>
    )
}