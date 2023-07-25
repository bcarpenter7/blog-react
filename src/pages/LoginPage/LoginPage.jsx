import { useState } from 'react'

export default function LoginPage({ setUser, user }){
    const [tempUser, setTempUser] = useState("")

    function handleLogin(e){
        e.preventDefault()
        setUser(tempUser)
    }

    function handleChange(e){
        const username = e.target.value
        setTempUser(username)
    }

    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={e => handleLogin(e)}>
                <label>Enter Username</label>
                <input 
                value={user} 
                onChange={e => handleChange(e)}
                />
                
            </form>
        </>


    )
}