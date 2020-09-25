import React ,{useEffect}from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


export default function HomeSwiper(){
    useEffect(function () {
        const mySwiper = new Swiper('#home-swiper', {
            slidesPerView : 4,
            spaceBetween : "5%",
            loop : true
         })
    },[]);
    return(
        <div id="home-swiper" key="home-swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide home-swiper-lhpp">
                    <p className="home-swiper-title">灵魂匹配</p>
                    <p className="home-swiper-info">和在线最匹配聊天</p>
                </div>
                <div className="swiper-slide home-swiper-qlpd">
                    <p className="home-swiper-title">群聊派对</p>
                    <p className="home-swiper-info">听听大家在聊什么</p>
                </div>
                <div className="swiper-slide home-swiper-yypp">
                    <p className="home-swiper-title">语音匹配</p>
                    <p className="home-swiper-info">今日剩余3次</p>
                </div>
                <div className="swiper-slide home-swiper-ljjpp">
                    <p className="home-swiper-title">脸基尼匹配</p>
                    <p className="home-swiper-info">剩余4次</p>
                </div>
                <div className="swiper-slide home-swiper-lal">
                    <p className="home-swiper-title">恋爱铃</p>
                    <p className="home-swiper-info">当缘分靠近会响铃</p>
                </div>
            </div>
        </div>
    )
}

