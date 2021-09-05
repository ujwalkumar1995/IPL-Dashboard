import { TeamPage } from './pages/TeamPage';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/teams/:teamName">
          <TeamPage/> 
        </Route>
      </Router> 
    </div>
  );
}

export default App;
