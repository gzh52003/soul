let user = localStorage.getItem('currentUser')
try{
    user = JSON.parse(user) || {}
}catch(err){
    user = {}
}
const initState={
    ...user
}
function reducer(state,action){
    switch(action.type){
        case 'login':
            localStorage.setItem('currentUser',JSON.stringify(acion.user))
            return{
                ...state,
                ...action.user
            }
            default:
                return state
    }
}
export {initState,reducer} 