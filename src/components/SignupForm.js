import React, { useState } from 'react'



const SignupForm = ({ submit, header, routerProps }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    return (
        <form onSubmit={e => {
            e.preventDefault();
            submit({ username, password})
            setUsername('')
            setPassword('')
            
        }}>
            <span>{header}</span>
            <input placeholder="Username" type="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="submit" />
        </form>
    )
    
}

export default SignupForm