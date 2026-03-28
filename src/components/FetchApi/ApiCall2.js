import React, { useState } from 'react'

const ApiCall2 = () => {

    const [formData, setData] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    })



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...formData, [name]: value })
    }


    const handleSubmit = async () => {
        try {
            const res = await fetch("https://enterprise-admin-backend.onrender.com/api/auth/register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await res.json();
        } catch (error) {
        }
    };


    return (
        <div>


            <input type="text" placeholder='Name' name="name" onChange={handleChange} />
            <input type="text" placeholder='Email' name="email" onChange={handleChange} />
            <input type="text" placeholder='Password' name="password" onChange={handleChange} />
            <input type="text" placeholder='Role' name="role" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default ApiCall2
