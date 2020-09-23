import Home from '~/Home'
import React from 'react'
import {lazy} from 'react'
const Mine = lazy(()=>import('~/Mine'))
const Chat = lazy(()=>import('~/Chat'))
const Square = lazy(()=>import('~/Square/index.js'))
const Search = lazy(()=>import('~/Square/search.js'))
import { Redirect } from 'react-router-dom'
export const routes =[
    {
        path:'/',
        exact:true,
        render:()=>(
            <Redirect to='/Home'></Redirect>
        )
    },
    {
        path:'/Home',
        component:Home,
        // routes:[
        //     {
        //         path:'/discover',
        //         exact:true,
        //         render:()=>(<Redirect to={'/discover/xxx'}></Redirect>)
        //     }
        // ]
    },{
        path:'/Square',
        component:Square,
    },{
        path:'/Chat',
        component:Chat
    },{
        path:'/Mine',
        component:Mine
    }, {
        path:'/Search',
        component:Search 
    }
]