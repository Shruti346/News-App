import React, { Component } from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
          <div className='nav'>
            {/* <img src='logo11.jpg' alt='ooo' width={"100px"} height={"50px"}/> */}
            <h1>NEWS HUB</h1>
            <div className='sidenav'>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/Contact'>Contact</Link>
            </div> 
          </div>       
        );
    }
}

export default Navbar;