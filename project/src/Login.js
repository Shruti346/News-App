import React,{useState} from 'react'

export default function Login() {
    const[email,setEmail]=useState("");

  return (
    
    <div>
        Login Page
        <form>
            <div className='log-1'>
                <input type="name"placeholder='your name' require>Name</input>
                <input type="email"placeholder='your Email' require>Email</input>
                <input type="name"placeholder='your name' require>Name</input>
                <input type="name"placeholder='your name' require>Name</input>
            </div>
        </form>
    </div>
  )
}
