import styles from './Button.module.css';

const Button = ({ children, onClick ,selected}) => {
 const buttonStyle = selected ? `${styles.btn} ${styles.selected}` : styles.btn;
   return (
      <button className={buttonStyle} onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;
