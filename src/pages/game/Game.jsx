import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import Round from '../../components/round/Round';
import ErrorModal from '../../components/modals/ErrorModal';
import styles from './Game.module.css';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';

const Game = () => {
   const params = useParams();
   const [rounds, setRounds] = useState([{}]);
   const [currentRound, setCurrentRound] = useState(0);
   const [correctAnswers, setCorrectAnswers] = useState(0);
   const [error, setError] = useState('');
   const [isLoaded, setIsLoaded] = useState(false);
   const gameEnded = currentRound >= rounds.length;

   useEffect(() => {
      const difficulty = params.difficulty;
      if (difficulty) {
         api.getQuestions(difficulty)
            .then((res) => {
               setRounds(res);
            })
            .catch((err) => {
               setError(err.message);
            })
            .finally(() => {
               setIsLoaded(true);
            });
      }
   }, [params]);

   if (!isLoaded) {
      return <Spinner />;
   }

   if (error) {
      return <ErrorModal error={error} setError={setError} />;
   }

   return (
      <div className={styles.container}>
         {gameEnded ? (
            <>
               <h2 className={styles.endGameTitle}>Fin del juego</h2>
               <h3 className={styles.endGameCorrectAnswers}>
                  Respuestas correctas: {correctAnswers}
               </h3>
               <div className={styles.endGameActionContainer}>
                  <Link to="/game" replace>
                     <Button>Volver a jugar</Button>
                  </Link>
                  <Link to="/" replace>
                     <Button>Inicio</Button>
                  </Link>
               </div>
            </>
         ) : (
            <Round
               round={rounds[currentRound]}
               setCurrentRound={setCurrentRound}
               setCorrectAnswers={setCorrectAnswers}
               correctAnswers={correctAnswers}
               setError={setError}
            />
         )}
      </div>
   );
};
export default Game;
