import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Contact from './pages/contact';
import NavigationBar from './components/navBar';
import SideBar from './components/sideBar';
import Login from './pages/login';
import { Provider } from 'react-redux';
import { store } from './store';
import { useDisclosure } from '@chakra-ui/react';
import './App.css';

function App() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
      <Provider store={store}>

      <div className="App">
        <Router>
          <div className="App">
            <header className="App-header">
                {
                  <>
                    <NavigationBar isOpen={isOpen} onToggle={onToggle}/>
                    <SideBar isOpen={isOpen} onClose={onClose}/>
                  </>
                }
              </header>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </div>
          </Router> 
        </div>
      </Provider>
  );
}

export default App;