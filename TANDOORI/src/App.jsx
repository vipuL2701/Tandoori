import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AboutUs from './Components/About/AboutUs'

function App() {
  return (
    <Router>
       <Header />
        <Routes>
             <Route path='/' exact Component={Home} />
             <Route path='about' Component={AboutUs} />
            
         </Routes>
       <Home />
    </Router>
  )
}

export default App