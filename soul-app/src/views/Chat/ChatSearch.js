import React from 'react'
import {SearchBar} from 'antd-mobile'

export default function ChatSearch(){
    return(
        <SearchBar placeholder="搜索昵称或聊天记录" maxLength={20} />
    )
}