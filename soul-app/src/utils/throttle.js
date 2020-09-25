export default function throttle(Ele){
    let t=null ;
    return function(){
        if(t){
            return
        }
        t= setTimeout(()=>{
            Ele();
            t=null
        },500)
    }
}