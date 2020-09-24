const {insert} = require("./mongo");
const {md5} = require("./secret");

//模拟userList数据
// async function testInsertUserList(){
//     for(let i = 1;i <= 10 ; i++){
//         await insert("userList",{
//             phoneNum : i+"",
//             password : md5(123456)+"",
//             userName : "dandan"+i,
//             planet : "",
//             avatorImgUrl : "",
//             bgImgUrl : "",
//             birthday : "880992000000",
//             creTime : Date.now()+"",
//             gender : "unkonw",
//             gravity : [],
//             followed : [],
//             beFollowed : [],
//             instants : []
//         })
//     }
// }
// testInsertUserList()


//模拟instantsList数据
async function testInsertinstantsList(){
    for(let i = 1;i <= 5 ; i++){
        await insert("instantsList",{
            userId : "5f6c0bec66529520f0ee2abc",
            creTime: Date.now()+"",
            tags : [ 
                "比惨大会", 
                "原来还有这种操作?"
            ],
            context : "公司准备裁员了,我悄悄包了500快红包给我们主管。就在我感觉高枕无忧，前途一片光明的时候，我们主管被裁了......",
            imgUrl : [
                "http://175.24.126.30:10000/assets/instantsImg/testImg/instantsImg1.jpg",
                "http://175.24.126.30:10000/assets/instantsImg/testImg/instantsImg2.jpg",
                "http://175.24.126.30:10000/assets/instantsImg/testImg/instantsImg3.jpg",
                "http://175.24.126.30:10000/assets/instantsImg/testImg/instantsImg4.jpg"
            ],
            location : "广州市",
            thumbs : [
                "5f6ac4bc8725e53ff4b47588",
                "5f6ac4bc8725e53ff4b47589",
                "5f6ac4bc8725e53ff4b4758a"
            ],
            comments : [
            ]
        })
    }
}
testInsertinstantsList()

// //模拟commentsList数据
// async function testInsertcommentsList(){
//     for(let i = 1;i <= 5 ; i++){
//         await insert("commentsList",{
//             instantsId:"5f6ab25eaadfa5208cc819c9",
//             userId : "5f6aaae5e155ca47a02a643"+i,
//             creTime:Date.now(),
//             context:"哈哈哈哈",
//             thumbs:[],
//         })
//     }
// }
// testInsertcommentsList()
