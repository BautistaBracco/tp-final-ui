import { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import ErrorModal from '../../components/modals/ErrorModal';
import styles from './ChooseDifficulty.module.css';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';

const ChooseDifficulty = () => {
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
      return <Spinner />;
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
                     <Button>{difficulty}</Button>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ChooseDifficulty;
