import React, { useState, useCallback, useRef } from 'react'
import '../../static/css/Publish.scss'
import {NavBar,Icon,Button,Toast,ImagePicker} from 'antd-mobile'
import request from '../../utils/request'
export default function Publish(props){
    let [content,InputSomething] = useState(''); 
    let [isdisabled,changeStatus] = useState(true)
    const refEl = useRef(null)
    const submitContent = useRef(null)
    const changeWord = useCallback((e)=>{
        InputSomething(content=e.target.value)
         changeStatus(isdisabled=false)
    },[content])
    const submit = useCallback(()=>{
       const result = request.post('/Moment/publish',{
        context:submitContent.current.value,
        userId:'5f6c5c4d4db5d900c0ba5b51'//先写死用户
       })
       if(result.code=1001){
        Toast.success('发布成功', 1)
        props.history.goBack()
       }
    })
    const close = useCallback(()=>{
        props.history.goBack()
    },[])
    let [files,uploadImg] = useState([])
    let onChange = useCallback(async(files)=>{
        uploadImg(files=files)
        console.log(files);
        const data = new FormData();
        data.set('_id','5f6c5c4d4db5d900c0ba5b54');
        data.set('avatar',files[0]);
        const result = await request.post('/upload/avatar',data)
       
    },[files])
    
    return(<div className='publish-wrap'>
            <div style={{position:"fixed",bottom:0,width:'100%'}}>
                <ImagePicker
                files={files}
                onChange={onChange}
                selectable={files.length < 1}
            />
            </div>
            <NavBar
            mode="light"
            leftContent={ <Icon key="0" type="cross" style={{color:'#000'}} onClick={close}/>}
           
            rightContent={<Button size='small' ref={refEl} disabled={isdisabled} onClick={submit}  style={content===''?{borderRadius:'20px'}:{background:'#0fccbc', color:'#fff',borderRadius:'20px'}  }>发布</Button>}
        >发布</NavBar>
            <textarea className='publish' placeholder='记录这一刻，晒给更懂你的人...' onChange={changeWord} ref={submitContent} >

            </textarea>
        </div>)
}