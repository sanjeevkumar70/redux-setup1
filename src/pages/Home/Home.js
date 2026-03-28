import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartAction, wishUpdateAction } from '../../redux/action/cartData'
import { Testimonial } from '../../components/Testimonial/Testimonial'
import './home.scss'

const Home = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(mydata => setData(mydata.products))
    }, [])

    const handleCart = (item) => {
        dispatch(cartAction(item))
    }

    const handleWish = (item) => {
        dispatch(wishUpdateAction(item))
    }

    return (
        <div className="home">

            <Testimonial />

            <div className="product-grid">

                {data.map((item) => (
                    <div className="product-card" key={item.id}>

                        <div className="image-box">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>

                        <div className="product-info">

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <div className="price">
                                ₹ {item.price}
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