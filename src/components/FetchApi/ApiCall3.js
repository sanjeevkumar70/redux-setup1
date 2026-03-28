import axios from 'axios';
import React, { useState } from 'react'
import useCounter from './CustomHooks';

const ApiCall3 = () => {

    const { count, increase, decrease } = useCounter();

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
            const res = await axios.post("https://enterprise-admin-backend.onrender.com/api/auth/register/", formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
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


            <h1>{count}</h1>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>




        </div>
    )
}

export default ApiCall3
