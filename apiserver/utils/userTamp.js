module.exports = function(phoneNum){
    return{
        phoneNum : phoneNum,
        password : "default",
        userName : "",
        planet : "",
        avatorImgUrl : "",
        bgImgUrl : "",
        birthday : "",
        creTime : Date.now()+"",
        gender : "unkonw",
        gravity : [],
        followed : [],
        beFollowed : [],
        instants : []
    }
}