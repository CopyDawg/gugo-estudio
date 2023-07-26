
import appleLogo from '../assets/apple-logo.png';
import dotIcon from '../assets/icons/dot.png';

export const Loading = () => {
  return (
    <div className="loader-wrapper">
        <div className="loader-logo spin">
            <img src={appleLogo} alt="Logo"/>
        </div>
        <div className="loader-message">
            <h3>Loading</h3>
            <img src={dotIcon} className="bounce-loader" />
            <img src={dotIcon} className="bounce-loader animation--delay-200" />
            <img src={dotIcon} className="bounce-loader animation--delay-400" />
        </div>
        <p className="loader-disclaimer">Page made with ❤️</p>
    </div>
  )
}
