import { useEffect, useState } from 'react';
import api from '../../utils/api';
import Option from '../option/Option';
import FeedbackMessage from '../feedbackMessage/FeedbackMessage';

const Round = ({
   round,
   setCurrentRound,
   setCorrectAnswers,
   correctAnswers,
   setError,
}) => {
   const { id, question, ...options } = round;
   const [answerStatus, setAnswerStatus] = useState('');
   const [optionSelected, setOptionSelected] = useState('');

   const onSubmitAnswer = async (option) => {
      if (optionSelected) return;
      setOptionSelected(option);
      console.log({ questionId: id, option });
      api.sendAnswer({ questionId: id, option })
         .then((res) => {
            if (res.answer) {
               setCorrectAnswers((prev) => prev + 1);
               setAnswerStatus('correct');
            } else {
               setAnswerStatus('incorrect');
            }
         })
         .catch((err) => {
            setError(err.message);
         });
   };

   useEffect(() => {
      if (answerStatus) {
         setTimeout(() => {
            setAnswerStatus('');
            setOptionSelected('');
            setCurrentRound((prev) => prev + 1);
         }, 2000);
      }
   }, [answerStatus, setCurrentRound]);

   return (
      <div>
         <h3>Correctas: {correctAnswers}</h3>
         <FeedbackMessage answerStatus={answerStatus} />
         <h2>{question}</h2>
         <ul>
            {Object.entries(options).map(([optionKey, optionValue]) => (
               <Option
                  key={optionKey}
                  option={optionValue}
                  onClick={() => onSubmitAnswer(optionKey)}
                  isSelected={optionSelected === optionKey}
                  answerStatus={answerStatus}
               />
            ))}
         </ul>
      </div>
   );
};

export default Round;
