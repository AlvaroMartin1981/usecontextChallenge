
import RoutesApp from './routes/RouteApp';
import { ThemeProvider, useTheme } from './themes/ThemeContext';
//import Button from './components/Button';

import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <RoutesApp />   
    
    </ThemeProvider>
  );
};

export default App;
