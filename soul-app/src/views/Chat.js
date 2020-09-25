import React, { useContext } from 'react'
import myContext from '../context'
// import {myContext} from '../store'
export default function Chat(){
    console.log(useContext(myContext));
    const {state,dispatch} = useContext(myContext)
    console.log(state,dispatch);
    return(
        <>
            <button>test</button>
        </>
    )
}