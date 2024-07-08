import styles from './Spinner.module.css';

const Spinner = ({ color = 'black' }) => {
   return (
      <div className={styles.container}>
         <div
            className={styles.spinner}
            style={{ borderColor: `${color} ${color} transparent transparent` }}
         />
      </div>
   );
};

export default Spinner;
