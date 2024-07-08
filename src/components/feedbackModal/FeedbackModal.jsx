import Spinner from '../spinner/Spinner';
import styles from './FeedbackModal.module.css';

const FeedbackModal = ({ answerStatus }) => {
   const renderStatusMessage = (status) => {
      switch (status) {
         case 'correct':
            return (
               <h2 className={`${styles.correct} ${styles.feedbackMessage}`}>
                  ¡Correcto!
               </h2>
            );
         case 'incorrect':
            return (
               <h2 className={`${styles.incorrect} ${styles.feedbackMessage}`}>
                  ¡Incorrecto!
               </h2>
            );
         default:
            return <Spinner color="white" />;
      }
   };

   return (
      <div className={styles.modal}>
         <div className={styles.modalContent}>
            {renderStatusMessage(answerStatus)}
         </div>
      </div>
   );
};

export default FeedbackModal;
