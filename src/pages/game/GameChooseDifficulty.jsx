import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import ErrorModal from '../../components/modals/ErrorModal';

const GameChooseDifficulty = () => {
   const [difficulties, setDifficulties] = useState([]);
   const [error, setError] = useState('');

   useEffect(() => {
      api.getDifficulty()
         .then((response) => {
            setDifficulties(response);
         })
         .catch((err) => {
            setError(err.message);
         });
   }, []);

   return (
      <div>
         <h2>Escoge la dificultad de la partida</h2>
         <div>
            {difficulties.length === 0 && <p>Cargando...</p>}
            {difficulties.map((difficulty) => (
               <Link to={`/game/${difficulty}`} key={difficulty}>
                  <button>{difficulty}</button>
               </Link>
            ))}
         </div>
         {error && <ErrorModal error={error} setError={setError} />}
      </div>
   );
};

export default GameChooseDifficulty;
