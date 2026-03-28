import React, { useEffect, useState } from 'react'
import './wish.css'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Wish = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(null)

    const wish_data = useSelector((state) => state.wishcartReducer.wish_data);

    const { token } = useSelector(state => state.loginReducer)

    useEffect(() => {
        console.log("-----------------------------")
        async function handleWishlist() {
            const response = await fetch(`https://enterprise-admin-backend.onrender.com/api/wishlist`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                        // 'Content-Type': 'application/json'
                    }
                }
            )
            const p_data = response.json();
            console.log(p_data, "======WISH LIST data======")
            // setData(p_data)
        }
        handleWishlist();

    },[])



    return (
        <div>
            <div class="container">
                <div class="cart-items">
                    <h2>My Wish Cart </h2>
                    {
                        wish_data?.map((item) =>
                            <div class="cart-card" key={item?.id}>
                                <img src={item?.thumbnail} alt="product" />

                                <div class="product-info">
                                    <h3>{item?.title}</h3>
                                    <p>Description: {item?.description.slice(1, 50)} ...</p>
                                    <p class="seller">Seller: RetailNet</p>

                                    <div class="price">
                                        <span class="new-price">₹{item?.price - 2}</span>
                                        <span class="old-price">₹{item?.price}</span>
                                        <span class="discount">14% off</span>
                                    </div>

                                    {/* <div class="actions">
                                        <button>Save for later</button>
                                        <button onClick={() => handleRemove(item?.id)}>Remove</button>
                                        <div className='quantity'>
                                            <button onClick={() => quantityUpdate(item?.id, "decr")}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => quantityUpdate(item?.id, "incer")}>+</button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        )
                    }
                </div>

                <div class="price-box">
                    <h3>PRICE DETAILS</h3>

                    <div class="row">
                        <span>Price</span>
                        {/* <span>{price.toFixed(2)}</span> */}
                        {/* {temp_data.map((item) =>
                            <span>{item?.price - 2}</span>
                        )} */}
                    </div>

                    <div class="row">
                        <span>Delivery Charges</span>
                        <span class="free">FREE</span>
                    </div>

                    <hr />

                    <div class="row total">
                        <span>Total Amount</span>

                        {/* <span>₹{price.toFixed(2)}</span> */}

                    </div>

                    <button class="order-btn" onClick={() => navigate('/payment')}>PLACE ORDER</button>
                </div>

            </div>

        </div>
    )
}

export default Wish 
