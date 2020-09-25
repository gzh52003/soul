import  {initState,reducer} from './reducers/user'
import MyContext from '../context'
import React,{ useReducer, createContext} from 'react'
//console.log('user',user);


// export const myContext = createContext(null)
// const store = createStore(reducers)
function Provider(props){
    const [state,dispatch] = useReducer(reducer,initState)
    console.log(props);
    return(
        <MyContext.Provider value={{state,dispatch}}>
            {props.children}
        </MyContext.Provider>)
}
export default Provider