//import logo from './logo.svg';
import Navbar from './navbar.jsx'
//import './App.css';
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
//import Sidebar from './sidebar.jsx'
import {Route,Routes} from "react-router-dom";
function App (){
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     </>
    );
}

export default App;
