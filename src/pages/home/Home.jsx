import { Link } from 'react-router-dom';
import img from '../../assets/preguntados.png';
import styles from './Home.module.css';

const Home = () => {
   return (
      <div className={styles.container}>
         <div className={styles.titleContainer}>
            <img src={img} alt="Preguntados" className={styles.img} />
            <h1 className={styles.title}>
               Preguntados
            </h1>
         </div>
         <Link to="/game">
            <button className={styles.button}>Jugar</button>
         </Link>
      </div>
   );
};

export default Home;
