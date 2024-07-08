import Button from '../button/Button';
import styles from './Option.module.css';

const Option = ({ option, onClick, isSelected }) => {
   const liStyle = isSelected ? `${styles.option} ${styles.selected}` : styles.option;
   return (
      <li className={liStyle}>
         <Button onClick={onClick} selected={isSelected}>
            {option}
         </Button>
      </li>
   );
};

export default Option;
