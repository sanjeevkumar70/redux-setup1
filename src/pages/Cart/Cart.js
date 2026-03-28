import React from 'react'
import './cart.scss'
import { useSelector, useDispatch } from 'react-redux';
import { cartRemoveAction, quantityUpdateAction } from '../../redux/action/cartData';

const Cart = () => {
    const dispatch = useDispatch();
    const temp_data = useSelector((state) => state.cartReducer.cart_product);

    const handleRemove = (id) => {
        dispatch(cartRemoveAction(id))
    }

    const quantityUpdate = (id, type) => {
        dispatch(quantityUpdateAction(id, type))
    }

    // ✅ TOTAL PRICE
    const totalPrice = temp_data.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    // ✅ TOTAL DISCOUNT (percentage based)
    const totalDiscount = temp_data.reduce((acc, item) => {
        const discountPercent = item.discountPercentage || 10;
        const discountAmount = (item.price * discountPercent) / 100;
        return acc + discountAmount * item.quantity;
    }, 0);

    // ✅ FINAL AMOUNT
    const finalAmount = totalPrice - totalDiscount;

    return (
        <div className="cart-container">

            {/* LEFT SIDE */}
            <div className="cart-items">

                <h2>My Cart ({temp_data.length} items)</h2>

                {temp_data.length === 0 ? (
                    <div className="empty-cart">
                        <h2>Your cart is empty 😢</h2>
                        <p>Add items to get started</p>
                    </div>
                ) : (

                    temp_data.map((item) => {

                        const discountPercent = item.discountPercentage || 10;
                        const discountAmount = (item.price * discountPercent) / 100;
                        const discountedPrice = (item.price - discountAmount).toFixed(2);

                        return (
                            <div className="cart-card" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />

                                <div className="product-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.description?.slice(0, 60)}...</p>
                                    <p className="seller">Seller: RetailNet</p>

                                    <div className="price">
                                        <span className="new-price">₹{discountedPrice}</span>
                                        <span className="old-price">₹{item.price}</span>
                                        <span className="discount">{discountPercent}% off</span>
                                    </div>

                                    <div className="actions">

                                        <button onClick={() => handleRemove(item.id)}>
                                            Remove
                                        </button>

                                        <div className="quantity">
                                            <button onClick={() => quantityUpdate(item.id, "decr")}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => quantityUpdate(item.id, "incer")}>+</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* RIGHT SIDE (ONLY WHEN ITEMS EXIST) */}
            {temp_data.length > 0 && (
                <div className="price-box">

                    <h3>PRICE DETAILS</h3>

                    <div className="price-wrapper">
                        <p>Price ({temp_data.length} items)</p>
                        <p>₹{totalPrice.toFixed(2)}</p>
                    </div>

                    <div className="price-wrapper">
                        <p>Discount</p>
                        <p className="discount">- ₹{totalDiscount.toFixed(2)}</p>
                    </div>

                    <div className="price-wrapper">
                        <p>Delivery Charges</p>
                        <p className="free">FREE</p>
                    </div>

                    <hr />

                    <div className="price-wrapper total">
                        <p>Total Amount</p>
                        <p>₹{finalAmount.toFixed(2)}</p>
                    </div>

                    <div className="savings">
                        You will save ₹{totalDiscount.toFixed(2)} on this order 🎉
                    </div>

                    <button className="order-btn">
                        PLACE ORDER
                    </button>

                </div>
            )}

        </div>
    )
}

export default Cart;