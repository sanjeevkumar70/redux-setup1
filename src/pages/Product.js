import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Product = () => {

    const { token } = useSelector((state) => state.loginReducer)

    useEffect(() => {
        const res =  fetch("https://enterprise-admin-backend.onrender.com/api/products", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(user_data)
        }).then((res) => res.json())
        .then((data) => {
            console.log(data, "PRODUCT DATA");
        })
        .catch((err) => {
            console.log(err);
        });

    }, [token]);

    
    return (
        <div>Product</div>
    )
}

export default Product