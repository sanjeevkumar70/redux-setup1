import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.username == "user" && formData.password == "123") {
            localStorage.setItem('token', "ksdhkhskdksjhdfkjhsdfkjhsdf")
            navigate("/")

        }


    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div style={{ margin: "auto", maxWidth: "500px" }}>


            <form onSubmit={handleSubmit}>
                {/* <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} /> <br />
                <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br /> */}
                <input type="text" placeholder='Enter username' name="username" onChange={handleChange} /> <br />
                <input type="text" placeholder='Enter password' name="password" onChange={handleChange} /> <br />
                <button type='submit'>Login</button>
            </form>

        </div>
    )
}

export default Login
