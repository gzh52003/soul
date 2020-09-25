import React from 'react'
import request from '../../utils/request'

export default class HomePlanet extends React.PureComponent{
    state={
        userList:[]
    }
    async componentDidMount(){
        let userData = await request.get('/getplanetinfo',{phoneNum:1})
        let tpmArr =  userData.data.map(item=>{
            return{
                _id:item._id,
                userName:item.userName,
                gender:item.gender
            }
        })
        this.setState({userList:tpmArr})
        try{
            let oContainer = document.getElementsByClassName("home-planet-container")[0]
            let oPlanet = document.getElementsByClassName("home-planet")[0]
            let oPlanetText = document.getElementsByClassName("planet-text")
            let oPlanetDot = document.getElementsByClassName("planet-dot")
            let x,y,x_,y_,xN,yN,roX = 0, roY = 0 , time = null;
            //console.log("oPlanetText=",oPlanetText , "oPlanetDot=",oPlanetDot);
            oContainer.onmousedown = function(e){
                    clearInterval(time);
                    e=e||window.event;
                    x_=e.clientX;
                    y_=e.clientY;//获取鼠标点下时的坐标
                    this.onmousemove = function(e){
                        e=e||window.event;
                        x=e.clientX;
                        y=e.clientY;//获取鼠标移动时的坐标
                        xN=x-x_;
                        yN=y-y_;//计算点下时和移动时的差值
                        roX += xN * 0.1;
                        roY += yN * 0.1;
                        if(roY > 90){
                            roY -= 180;
                        }else if(roY < -90){
                            roY += 180;
                        }//x轴旋转超过90度,y轴旋转会反向
                        oPlanet.style.transform = `rotateX(${-roY}deg) rotateY(${roX}deg)`;//rotateZ(${(roX + roY)/2}deg
                        for(let i = 0; i < 62; i++){
                            oPlanetText[i].style.transform = `rotateX(${roY}deg) rotateY(${-roX}deg)`;// rotateZ(${-(roX + roY)/2}deg
                            oPlanetDot[i].style.transform = `rotateX(${roY}deg) rotateY(${-roX}deg)`;
                        }//反向旋转使a始终正对屏幕
                        x_=e.clientX;
                        y_=e.clientY;
                    }
                    this.onmouseup = function(){
                        this.onmousemove = null;
                        //惯性效果
                        time=setInterval(function ( ) {
                            //无限乘以零点95以接近0
                            xN*=0.95;
                            yN*=0.95;
                            //当它小到0.1时停止计时器
                            if(Math.abs(xN)<0.1 && Math.abs(yN)<0.1){
                                clearInterval(time);
                            }
                            roX += xN * 0.1;
                            roY += yN * 0.1;
                            if(roY > 90){
                                roY -= 180;
                            }else if(roY < -90){
                                roY += 180;
                            }
                            oPlanet.style.transform=`rotateX(${-roY}deg) rotateY(${roX}deg)`;
                            //oBlack.style.transform = `rotateX(${roY}deg) rotateY(${-roX}deg) `;
                            for(let i = 0; i < 62; i++){
                                oPlanetText[i].style.transform = `rotateX(${roY}deg) rotateY(${-roX}deg) `;//rotateZ(${-(roX - roY)}deg
                                oPlanetDot[i].style.transform = `rotateX(${roY}deg) rotateY(${-roX}deg) `;
                            }
                        },30)
                    }
                }

        }catch(err){
        }
    }
    render(){
        let piNum=[0 , 1/6 , 1/3 , 1/2 , 2/3 , 5/6 , 1 , 7/6 , 4/3 , 3/2 , 5/3 , 11/6];
        return(
            <div className="home-planet-container" key="home-planet-container"> 
                <ul className="home-planet">
                    {
                        this.state.userList.map((item,i)=>(<>
                            <li 
                            className="planet-item"
                            key={item._id+""}
                            _id={item._id}
                            style={(function(){
                                if(i<12){
                                    return {
                                        transform:`translate3d(${parseInt(150*Math.cos(piNum[i]*Math.PI))}px , 0, ${parseInt(150 *Math.sin(piNum[i]*Math.PI))}px)`
                                    }
                                }else if(i < 24 && i >= 12){
                                    return{
                                        transform : `translate3d(${parseInt(150*Math.cos(Math.PI*(1/6))*Math.cos(piNum[i-12]*Math.PI))}px , ${parseInt(150*Math.sin(Math.PI*(1/6)))}px, ${parseInt(150*Math.cos(Math.PI*(1/6))*Math.sin(piNum[i-12]*Math.PI))}px)`
                                    }
                                }else if(i < 36 && i >= 24){
                                    return{
                                        transform : `translate3d(${parseInt(150*Math.cos(Math.PI*(1/6))*Math.cos(piNum[i-24]*Math.PI))}px , ${parseInt(150*Math.sin(Math.PI*(1/6)))*(-1)}px, ${parseInt(150*Math.cos(Math.PI*(1/6))*Math.sin(piNum[i-24]*Math.PI))}px)`
                                    }
                                }else if(i < 48 && i >=36){
                                    return{
                                        transform : `translate3d(${parseInt(150*Math.cos(Math.PI*(1/3))*Math.cos(piNum[i-36]*Math.PI))}px , ${parseInt(150*Math.sin(Math.PI*(1/3)))}px, ${parseInt(150*Math.cos(Math.PI*(1/3))*Math.sin(piNum[i-36]*Math.PI))}px)`
                                    }
                                }else if(i < 60 && i >=48){
                                    return{
                                        transform : `translate3d(${parseInt(150*Math.cos(Math.PI*(1/3))*Math.cos(piNum[i-48]*Math.PI))}px , ${parseInt(150*Math.sin(Math.PI*(1/3)))*(-1)}px, ${parseInt(150*Math.cos(Math.PI*(1/3))*Math.sin(piNum[i-48]*Math.PI))}px)`
                                    }
                                }else if(i == 60){
                                    return{
                                        transform : "translate3d(0,150px,0)"
                                    }
                                }else if(i == 61){
                                    return{
                                        transform : "translate3d(0,-150px,0)"
                                    }
                                }
                            })()}
                            >
                                <span className="planet-text" key={"text"+item._id}>{item.userName}</span>
                               <i className="planet-dot" key={"dot"+item._id}></i> 
                            </li>
                        
                        </>))
                    }
                </ul>
            </div>
        )
    }
}
