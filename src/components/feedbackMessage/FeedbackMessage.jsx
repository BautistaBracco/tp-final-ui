


const FeedbackMessage = ({ answerStatus }) => {
   return (
      <div>
	 {answerStatus === 'correct' && <h3>Correcto!</h3>}
	 {answerStatus === 'incorrect' && <h3>Incorrecto!</h3>}
      </div>
   );
}

export default FeedbackMessage;
