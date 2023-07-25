import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Submitted");
    }


    return (
        <div className='loginsignup'>
            <form onSubmit={submitHandler} className='login-side'>
                <h2>Login</h2>
                <input placeholder='Email' onChange={(e) => setLoginEmail(e.target.value)} value={loginEmail}></input>
                <input placeholder='Password' onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword}></input>
                <button>Login</button>
            </form>
            <hr />
            <form onSubmit={submitHandler} className='signup-side'>
                <h2>SignUp</h2>
                <input placeholder='UserName' onChange={(e) => setUsername(e.target.value)} value={username}></input>
                <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <button>Signup</button>
            </form>
        </div>
    )
}

export default LoginSignup