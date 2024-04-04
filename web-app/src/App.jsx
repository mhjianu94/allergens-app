import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import About from './components/about';
import NavigationBar from './components/navBar';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

function App() {
  return (
      <Provider store={store}>

      <div className="App">
        <Router>
          <div className="App">
            <header className="App-header">
                {
                  <NavigationBar/>
                }
              </header>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </div>
          </Router> 
        </div>
      </Provider>
  );
}

export default App;