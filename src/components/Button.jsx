import  { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`btn ${theme}`} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default Button;
