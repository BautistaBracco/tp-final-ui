import Button from '../button/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ error, setError }) => {
   const onClose = () => {
      setError('');
   };

   return (
      <div className={styles.modal}>
         <div className={styles.content}>
            <h2 className={styles.title}>Error</h2>
            <p className={styles.text}>{error}</p>
            <Button onClick={onClose}>Cerrar</Button>
         </div>
      </div>
   );
};

export default ErrorModal;
