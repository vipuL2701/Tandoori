import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import AboutUs from './Components/About/AboutUs';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
       <Header />
        <Routes>
             <Route path='/' exact Component={Home} />
             <Route path='/menu' Component={Menu} />
             <Route path='/about' Component={AboutUs} />
             <Route path='/contact' Component={Contact} />
             <Route path='/login' Component={Login} />
          </Routes>
    </Router>
  )
}

export default App