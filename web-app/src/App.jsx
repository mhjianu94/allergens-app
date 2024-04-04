import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import NavigationBar from './components/navBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <header className="App-header">
            {
              <NavigationBar/>
            }
          </header>
          <body>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
            </Routes>
          </body>
        </div>
      </Router> 
    </div>
  );
}

export default App;