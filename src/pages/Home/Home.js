import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction, wishUpdateAction } from '../../redux/action/cartData'
import { Testimonial } from '../../components/Testimonial/Testimonial'
import './home.scss'

const Home = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    const { token } = useSelector((state) => state.loginReducer)

    useEffect(() => {

        async function HomePageProduct() {

            const response = await fetch(`https://enterprise-admin-backend.onrender.com/api/products`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const my_data = await response.json();
            setData(my_data.data)

        }
       if(token){
         HomePageProduct();
       }
    }, [token])


    const handleCart = (p_data) => {
        //console.log(p_data, "HOMEPAGE")
        dispatch(cartAction(p_data))
    }

    const handleWish = (s_data) => {
        dispatch(wishUpdateAction(s_data))
    }

    return (
        <div className="home">

            <Testimonial />

            <div className="product-grid">

                {data.map((item) => (
                    <div className="product-card" key={item._id}>

                        <div className="image-box">
                            <img src={item.p_image} alt={item.title} />
                        </div>

                        <div className="product-info">

                            <h3>{item.p_name}</h3>

                            <p>{item.p_description}</p>

                            <div className="price">
                                ₹ {item.p_price}
                            </div>

                            <div className="actions">
                                <button 
                                    className="cart-btn"
                                    onClick={() => handleCart(item)}
                                >
                                    Add to Cart
                                </button>

                                <button 
                                    className="wish-btn"
                                    onClick={() => handleWish(item)}
                                >
                                    Wishlist
                                </button>
                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Home;