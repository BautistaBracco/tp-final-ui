import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import ErrorModal from '../../components/modals/ErrorModal';
import styles from './GameChooseDifficulty.module.css';

const GameChooseDifficulty = () => {
   const [difficulties, setDifficulties] = useState([]);
   const [error, setError] = useState('');
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      api.getDifficulty()
         .then((response) => {
            setDifficulties(response);
         })
         .catch((err) => {
            setError(err.message);
         })
         .finally(() => {
            setIsLoaded(true);
         });
   }, []);

   if (!isLoaded) {
      return (
         <div>
            <h2>Cargando...</h2>
         </div>
      );
   }

   if (error) {
      return <ErrorModal error={error} setError={setError} />;
   }

   return (
      <div className={styles.container}>
         <h2 className={styles.title}>Escoge la dificultad de la partida</h2>
         <div className={styles.difficultyContainer}>
            {difficulties.map((difficulty) => (
               <div className={styles.difficulty} key={difficulty}>
                  <Link to={`/game/${difficulty}`}>
                     <button className={styles.btn}>{difficulty}</button>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default GameChooseDifficulty;
