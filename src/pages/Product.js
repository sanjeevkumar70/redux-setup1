import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Product.css'
import { useNavigate } from 'react-router-dom';
const Product = () => {
    const [products, setProducts] = useState([]);
    // const temp_data = '';
    const { token } = useSelector((state) => state.loginReducer)
    const navigate = useNavigate();
    useEffect(() => {
        const res = fetch("https://enterprise-admin-backend.onrender.com/api/products", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        }).then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
            })
            .catch((err) => {
            });

    }, [token]);

    return (
        <div className="container">
            {/* <h1 className="title">Product List</h1> */}
            <div className="grid">
                {products?.map((product) => (
                    <div key={product._id} className="card">
                        {/* Product Image */}
                        <div className="image-container">
                            <img
                                src={
                                    product.p_image?.startsWith("https")
                                        ? product.p_image
                                        : "https://www.maximawatches.com/cdn/shop/files/69100CMGY-A_79d56a17-b371-4bba-9086-cbce49e8de86.jpg?v=1739601173"
                                }
                                alt={product.p_name}
                                className="product-image"
                            />
                        </div>

                        <h2 className="product-name">{product.p_name}</h2>

                        <p className="product-code">
                            Code: {product.p_code}
                        </p>

                        <p className="product-desc">
                            {product.p_description}
                        </p>

                        <div className="card-footer">
                            <span className="price">₹{product.p_price}</span>
                            <button className="btn" onClick={() => navigate(`/product/${product._id}`, { state: product })}>View details</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product