import React, { useEffect, useState } from 'react'
import './wishlist.scss'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WishList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const { token } = useSelector(state => state.loginReducer);

    useEffect(() => {
        async function handleWishlist() {
            try {
                const response = await fetch(
                    "https://enterprise-admin-backend.onrender.com/api/wishlist",
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const result = await response.json();
                setData(result?.data || result);

            } catch (error) {
            }
        }

        if (token) {
            handleWishlist();
        }
    }, [token]);

    return (
        <div className="wishlist-container">

            <h2>My Wishlist ({data.length})</h2>

            {data.length === 0 ? (
                <div className="empty">
                    <h3>Your wishlist is empty 💔</h3>
                    <p>Add products to wishlist</p>
                    <button onClick={() => navigate('/')}>
                        Go Shopping
                    </button>
                </div>
            ) : (

                <div className="wishlist-grid">

                    {data.map((item) => {

                        // ✅ FIX PRICE
                        const discountPercent = 10;
                        const discountAmount = (item.p_price * discountPercent) / 100;
                        const finalPrice = (item.p_price - discountAmount).toFixed(2);

                        return (
                            <div className="wish-card" key={item._id}>

                                <img src={item.p_image} alt={item.p_name} />

                                <div className="info">

                                    <h3>{item.p_name}</h3>

                                    <p className="desc">
                                        {item.p_description?.slice(0, 50)}...
                                    </p>

                                    <div className="price">
                                        <span className="new">₹{finalPrice}</span>
                                        <span className="old">₹{item.p_price}</span>
                                        <span className="off">{discountPercent}% off</span>
                                    </div>

                                    <div className="actions">

                                        <button className="cart-btn">
                                            Move to Cart
                                        </button>

                                        <button className="remove-btn">
                                            Remove
                                        </button>

                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
            )}

        </div>
    )
}

export default WishList;