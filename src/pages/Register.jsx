import React from 'react'
import "./Register.scss"
import Add from "./img/add.png"

function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatto</span>
            <span className='title'>Sign up to chat with friends</span>
            <form>
                <input type='email' placeholder='Enter your email...'/>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <input style={{display: "none"}} type='file' id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="avatar" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
        </div>
        <div className='account'>
            <span>Have an account? Log in</span>
        </div>
    </div>
  )
}

export default Register