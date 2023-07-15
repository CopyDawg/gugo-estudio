import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { NavLink } from 'react-router-dom';

export const Socials = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
  });

  return (
    <section className="socials">
        <div className="socials-container">
            <div className="socials-map">
              {isLoaded ? <Map/> : <p>Loading...</p>}
            </div>
            <div className="socials-text">
              <div className="socials-media">
                <div className="socials-text-item" >
                  <a href="https://www.facebook.com/Gugotattoos" target="_blank">
                    <img src="src\assets\icons\facebook-logo.png"/>
                  </a>
                  <p>Gugo St</p>
                </div>
                <div className="socials-text-item" >
                  <a href="https://www.instagram.com/gugost/" target="_blank">
                    <img src="src\assets\icons\instagram-logo.png"/>
                  </a>
                  <p>@gugost</p>
                </div>
              </div>
              <div className="socials-aditional-info">
                <div className="socials-text-item" >
                  <img src="src\assets\icons\whatsapp-logo.png"/>
                  <p>3318238896</p>
                </div>
                <div className="socials-text-item" >
                  <img src="src\assets\icons\maps-logo.png"/>
                  <p>Calle Loma Seca Ote. 102, Loma Dorada Delegación A, Tonalá, Jal.</p>
                </div>
              </div>
              <NavLink to="/contact" className="styled-button" >Contáctame</NavLink>
            </div>
        </div>
    </section>
  )
}
 
function Map() {

  const position = useMemo( () => ({lat: 20.626562952855323, lng: -103.25838313586638}), [] );

  return (
    <GoogleMap 
      zoom={15} 
      center={position} 
      mapContainerClassName="map-container" 
    >
      <MarkerF position={position} />
    </GoogleMap>
  )

}
