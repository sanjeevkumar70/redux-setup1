import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


// {
//   "name": "prachi",
//   "email": "prachi12@gmail.com",
//   "password": "12345",
//   "role": "user"
// }
const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
    role:""

  })

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
        localStorage.setItem('token', data.token)
        swal("Registered successfully");
        navigate("/")
      } else {
        console.log("Error:", data.message);
      }

    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, [e.target.email]: e.target.value, [e.target.password]: e.target.value, [e.target.role]: e.target.value })
    
  }

  return (
    <div style={{ margin: "auto", maxWidth: "500px",padding:"20px" }}>

      <form onSubmit={handleRegister}>
        Name: <input type="text" placeholder='Enter username' name="name" onChange={handleChange} /> <br />
        EMAIL: <input type="email" placeholder='Enter email' name="email" onChange={handleChange} /> <br />
        PASSWORD: <input type="text" placeholder='Enter password' name="password" onChange={handleChange} /> <br />
        ROLE: <input type="text" placeholder='Enter role' name="role" onChange={handleChange} /> <br />
        <button type='submit'>Register</button>
      </form>

    </div>
  )
}

export default Register;




















