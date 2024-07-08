import { Link } from 'react-router-dom';
import img from '../../assets/preguntados.png';
import styles from './Home.module.css';
import Button from '../../components/button/Button';

const Home = () => {
   return (
      <div className={styles.container}>
         <div className={styles.titleContainer}>
            <img src={img} alt="Preguntados" className={styles.img} />
            <h1 className={styles.title}>Preguntados</h1>
         </div>
         <Link to="/game">
            <Button>Comenzar</Button>
         </Link>
      </div>
   );
};

export default Home;
