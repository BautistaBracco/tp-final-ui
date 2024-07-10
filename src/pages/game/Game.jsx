import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { useParams } from 'react-router-dom';
import Round from '../../components/round/Round';
import styles from './Game.module.css';
import Spinner from '../../components/spinner/Spinner';
import ErrorModal from '../../components/errorModal/ErrorModal';
import GameEnd from '../../components/gameEnd/GameEnd';

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
      return (
         <div className={styles.container}>
            <Spinner />
         </div>
      );
   }

   return (
      <div className={styles.container}>
         {gameEnded ? (
            <GameEnd correctAnswers={correctAnswers} />
         ) : (
            <Round
               round={rounds[currentRound]}
               setCurrentRound={setCurrentRound}
               setCorrectAnswers={setCorrectAnswers}
               correctAnswers={correctAnswers}
               setError={setError}
            />
         )}
         {error && <ErrorModal error={error} setError={setError} />}
      </div>
   );
};
export default Game;
