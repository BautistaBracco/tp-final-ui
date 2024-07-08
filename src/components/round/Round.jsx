import { useEffect, useState } from 'react';
import api from '../../utils/api';
import Option from '../option/Option';
import styles from './Round.module.css';
import FeedbackModal from '../feedbackModal/FeedbackModal';

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
      <>
         <div className={styles.roundHeader}>
            <h3 className={styles.correctAnswers}>
               Respuestas correctas: {correctAnswers}
            </h3>
            <h2 className={styles.question}>{question}</h2>
         </div>
         <ul className={styles.answerOptions}>
            {Object.entries(options).map(([optionKey, optionValue]) => (
               <Option
                  key={optionKey}
                  option={optionValue}
                  onClick={() => onSubmitAnswer(optionKey)}
                  isSelected={optionSelected === optionKey}
               />
            ))}
         </ul>
         {optionSelected && <FeedbackModal answerStatus={answerStatus} />}
      </>
   );
};

export default Round;
