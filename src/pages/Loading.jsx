
import apple_logo from '../assets/apple-logo.png';
import dot_icon from '../assets/icons/dot.png';

export const Loading = () => {
  return (
    <div className="loader-wrapper">
        <div className="loader-logo spin">
            <img src={apple_logo} alt="Logo"/>
        </div>
        <div className="loader-message">
            <h3>Loading</h3>
            <img src={dot_icon} className="bounce-loader" />
            <img src={dot_icon} className="bounce-loader animation--delay-200" />
            <img src={dot_icon} className="bounce-loader animation--delay-400" />
        </div>
        <p className="loader-disclaimer">Page made with ❤️</p>
    </div>
  )
}
