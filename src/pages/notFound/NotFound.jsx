import styles from './NotFound.module.css';

const NotFound = () => {
   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <h1 className={styles.title}>404 Not Found</h1>
            <p className={styles.text}>
               Disculpa, la página que buscas no existe. Por favor, verifica la
               URL e intenta nuevamente.
            </p>
         </div>
      </div>
   );
};

export default NotFound;
