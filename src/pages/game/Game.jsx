import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import Round from '../../components/round/Round';
import ErrorModal from '../../components/modals/ErrorModal';

const Game = () => {
   const params = useParams();
   const [rounds, setRounds] = useState([{}]);
   const [currentRound, setCurrentRound] = useState(0);
   const [correctAnswers, setCorrectAnswers] = useState(0);
   const [error, setError] = useState('');

   useEffect(() => {
      const difficulty = params.difficulty;
      if (difficulty) {
         api.getQuestions(difficulty)
            .then((res) => {
               setRounds(res);
            })
            .catch((err) => {
               setError(err.message);
            });
      }
   }, [params]);

   return (
      <div>
         {currentRound < rounds.length ? (
            <Round
               round={rounds[currentRound]}
               setCurrentRound={setCurrentRound}
               setCorrectAnswers={setCorrectAnswers}
               correctAnswers={correctAnswers}
               setError={setError}
            />
         ) : (
            <div>
               <h2>Fin del juego</h2>
               <h3>Respuestas correctas: {correctAnswers}</h3>
               <Link to="/game" replace>
                  <button>Volver a jugar</button>
               </Link>
               <Link to="/" replace>
                  <button>Inicio</button>
               </Link>
            </div>
         )}
         {error && <ErrorModal error={error} setError={setError} />}
      </div>
   );
};

export default Game;
