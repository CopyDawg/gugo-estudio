
export const EmailResponseMsg = () => {
  return (
    <>
    
        <div className="email-success">
            <img src="src\assets\icons\success.png" />
            <h4 className="success-msg">Mensaje enviado correctamente.</h4>
        </div>
        
        <div className="email-error">
            <img src="src\assets\icons\error.png" />
            <h4 className="error-msg">Error al enviar el mensaje, vuelva a intentar.</h4>
        </div>

    </>
  )
}
