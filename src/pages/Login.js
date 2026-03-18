import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://enterprise-admin-backend.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token)
                alert("Login success");
                navigate("/")
            } else {
                console.log("Error:", data.message);
            }

        } catch (error) {
            console.error("Something went wrong:", error);
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
                <input type="text" placeholder='Enter username' name="email" onChange={handleChange} /> <br />
                <input type="text" placeholder='Enter password' name="password" onChange={handleChange} /> <br />
                <button type='submit'>Login</button>
            </form>

        </div>
    )
}

export default Login
