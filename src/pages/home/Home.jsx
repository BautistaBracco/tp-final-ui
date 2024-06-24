import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <div>
         <h1>Preguntados</h1>
         <Link to="/game">
            <button>Comenzar</button>
         </Link>
      </div>
   );
};

export default Home;
