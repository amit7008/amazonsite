import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {} from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {} from "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Navbar from "./component/Navbar";
import Footer from '../src/component/Footer';
import Pageheader from './component/Pageheader';


 
const App = () =>{
  return(
  <>
  
<BrowserRouter /* </>basename={'/dev/amazon'} */>
<Navbar />
  <Routes>
  <Route  path='/' element={<Home />} />
  <Route  path='/about' element={<About/>} />
  <Route  path='/contact' element={<Contact/>} />
  <Route  path='/services' element={<Services/>} />
  <Route  path='/portfolio' element={<Portfolio/>} />
  <Route  path='/career' element={<Career/>}/>
  </Routes>
  <Footer />
  </BrowserRouter>
 
  </>
  )
}

export default App;