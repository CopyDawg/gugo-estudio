import { useEffect, useState } from "react"

export const HomeHeader = () => {

    const [backgroundRef, setBackgroundRef] = useState('src/assets/backgrounds/home-header.png');
    window.addEventListener('resize', (event) => {

        event.target.innerWidth > 650 
        ? setBackgroundRef('src/assets/backgrounds/home-header.png')
        : setBackgroundRef('src/assets/backgrounds/home-header-mobile.png')
        
    }, true);

    useEffect(() => {
      window.innerWidth > 650 
      ? setBackgroundRef('src/assets/backgrounds/home-header.png')
      : setBackgroundRef('src/assets/backgrounds/home-header-mobile.png')
    }, [])
    

    return (
        <header className="home-header">
            <img src={ backgroundRef } className="background"/>
            <img src="src\assets\gugost-title.png" className="title"/>
            <a className="down-arrow-button bounce" href="#info-section"><img src="src\assets\icons\down-arrow.png" alt="down arrow icon" /></a>
        </header>
    )
}
