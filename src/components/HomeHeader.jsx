import { useEffect, useState } from "react"
import homeBackground from '../assets/backgrounds/home-header.png';
import homeMobileBackground from '../assets/backgrounds/home-header-mobile.png';
import homeTitle from '../assets/gugost-title.png';
import downArrow from '../assets/icons/down-arrow.png';

export const HomeHeader = () => {

    const [backgroundRef, setBackgroundRef] = useState(homeBackground);
    window.addEventListener('resize', (event) => {

        event.target.innerWidth > 650 
        ? setBackgroundRef(homeBackground)
        : setBackgroundRef(homeMobileBackground)
        
    }, true);

    useEffect(() => {
      window.innerWidth > 650 
      ? setBackgroundRef(homeBackground)
      : setBackgroundRef(homeMobileBackground)
    }, [])
    

    return (
        <header className="home-header">
            <img src={ backgroundRef } className="background"/>
            <img src={homeTitle} className="title"/>
            <a className="down-arrow-button bounce" href="#info-section"><img src={downArrow} alt="down arrow icon" /></a>
        </header>
    )
}
