import success from '../assets/icons/success.png';
import error from '../assets/icons/error.png';

export const EmailResponseMsg = () => {
  return (
    <>
    
        <div className="email-success">
            <img src={success} />
            <h4 className="success-msg">Mensaje enviado correctamente.</h4>
        </div>
        
        <div className="email-error">
            <img src={error} />
            <h4 className="error-msg">Error al enviar el mensaje, vuelva a intentar.</h4>
        </div>

    </>
  )
}
