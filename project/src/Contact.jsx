import React, { Component } from 'react';
import './navbar.css';

class Contact extends Component {
    render() {
        return (
            <div className='back'>
               <div className='card-con'>
                   <h1>Get In Touch!</h1>
                   <h3>Contact Us To Any Query About Project</h3>
                  <form > 
                       <div className='box-1'>
                          <input type="name"placeholder=   'First name'  required/>
                       </div>                   
                       <div className='box-2'>
                           <input type="Email"placeholder='Your Email'required />
                       </div>
                       <div className='box-3'>
                          <input type="password"placeholder='Enter password'required/>
                       </div>  
                       <div className='box-6'> 
                       {/* <label>Subject</label>  */}
                       <input type="Subject"placeholder='Write Something....'required/>
                       </div>
                       <div class="app-contact"><h4>YOU CAN ALSO CONTACT US</h4>
                        CONTACT INFO :<br/> +62 81 314 928 595 
                       </div>
                       {/* </div> */}
        
                        <button type='Submit'>Submit</button>
                  </form>
               </div>
           </div>  
        );
    }
}
export default Contact;