



const ErrorModal = ({ error, setError }) => {
   const onClose = () => {
      setError('');
   };

   return (
      <div>
	 <div>
	    <h2>Error</h2>
	    <p>{error}</p>
	    <button onClick={onClose}>Cerrar</button>
	 </div>
      </div>
   );
}

export default ErrorModal;
