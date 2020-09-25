import React from 'react'
import '../../static/css/Home.scss'
import HomeSwiper from './HomeSwiper'
import HomePlanet from './HomePlanet'
export default function Home() {
    return ( 
        <div className="home" key="home">
            <HomePlanet key="HomePlanet"/>
            <HomeSwiper key="HomeSwiper"/>
        </div>

    )
}