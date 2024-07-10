import Spinner from '../spinner/Spinner';
import styles from './FeedbackModal.module.css';

const FeedbackModal = ({ answerStatus }) => {
   const renderStatusMessage = (status) => {
      switch (status) {
         case 'correct':
            return (
               <div className={styles.modalContent}>
                  <h2 className={`${styles.correct} ${styles.feedbackMessage}`}>
                     ¡Correcto!
                  </h2>
               </div>
            );
         case 'incorrect':
            return (
               <div className={styles.modalContent}>
                  <h2
                     className={`${styles.incorrect} ${styles.feedbackMessage}`}
                  >
                     ¡Incorrecto!
                  </h2>
               </div>
            );
         default:
            return <Spinner color="white" />;
      }
   };

   return (
      <div className={styles.modal}>{renderStatusMessage(answerStatus)}</div>
   );
};

export default FeedbackModal;
