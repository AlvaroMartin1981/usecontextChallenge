import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RouteApp';
import ThemeProvider from './themes/ThemeContext';
import Button from './components/Button';
import Header from './templates/Header';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="Header"><Header /></div>
        <div className="App">                    
          <Button />
          <RoutesApp />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
