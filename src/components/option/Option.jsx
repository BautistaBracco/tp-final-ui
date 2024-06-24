const Option = ({ option, onClick, isSelected, isCorrect, isIncorrect }) => {
   return (
      <li style={isSelected ? { backgroundColor: 'lightblue' } : {}}>
         <button onClick={onClick}>{option}</button>
      </li>
   );
};

export default Option;
