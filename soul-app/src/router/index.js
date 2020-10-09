import Home from '~/Home/index.js'
import Login from '~/Login'
import React from 'react'
import { lazy } from 'react'
const Mine = lazy(() => import('~/Mine'))
const Chat = lazy(() => import('~/Chat/index.js'))
const More = lazy(() => import('~/More'))
const Square = lazy(() => import('~/Square/index.js'))
const Search = lazy(() => import('~/Square/search.js'))
const Detail = lazy(()=> import('~/Square/details.js'))
const Publish = lazy(()=>import('~/Publish/publish.js'))
const Reg = lazy(() => import('~/Reg'))
import { Redirect } from 'react-router-dom'
export const routes =[
    {
        path:'/',
        exact:true,
        render:()=>(
            <Redirect to='/Login'></Redirect>
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
    },{
        path:'/Detail/:id',
        component:Detail
    },{
        path:'/Publish',
        component:Publish
    },{
        path: '/Reg',
        component: Reg
      },{
        path: '/Login',
        component: Login
      },{
        path: '/More',
        component: More
      }]

