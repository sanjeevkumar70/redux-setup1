import './register.scss';
import swal from 'sweetalert';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://enterprise-admin-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        swal("Registered successfully", "", "success");
        navigate("/");
      } else {
        swal("Error", data.message, "error");
      }

    } catch (error) {
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h2>Create Account 🚀</h2>
        <p>Join us and start shopping</p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Role (user/admin)"
            name="role"
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>

        <div className="extra-links">
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>

      </div>
    </div>
  );
};

export default Register;