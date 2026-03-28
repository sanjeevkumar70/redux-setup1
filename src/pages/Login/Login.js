import './login.scss'
import swal from 'sweetalert';
import React, { useState } from 'react';
import { loginDataAction } from '../../redux/action/cartData';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

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
                dispatch(loginDataAction(data))
                swal("Login success");
                navigate("/")
            } else {
            }

        } catch (error) {
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="login-page">
            <div className="login-card">

                <h2>Welcome Back 👋</h2>
                <p>Login to continue shopping</p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>

                <div className="extra-links">
                    <span>Don't have an account?</span>
                    <a href="/register">Register</a>
                </div>

            </div>
        </div>
    )
}

export default Login
