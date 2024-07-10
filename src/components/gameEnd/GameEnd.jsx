import { Link } from 'react-router-dom';
import Button from '../button/Button';
import styles from './GameEnd.module.css';

const GameEnd = ({ correctAnswers }) => {
   return (
      <>
         <h2 className={styles.title}>Fin del juego</h2>
         <h3 className={styles.correctAnswers}>
            Respuestas correctas: {correctAnswers}
         </h3>
         <div className={styles.actionContainer}>
            <Link to="/choose-difficulty" replace>
               <Button>Volver a jugar</Button>
            </Link>
            <Link to="/" replace>
               <Button>Inicio</Button>
            </Link>
         </div>
      </>
   );
};

export default GameEnd;
