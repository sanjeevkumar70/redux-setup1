import React from 'react'
import './HomeProductDetails.css'
import { useLocation } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../redux/action/cartData'

const HomeProductDetails = () => {
    const dispatch = useDispatch()
    const product = useLocation().state
    // console.log(product)

  if (!product) {
    return <div> ITEM GETTING LOAD......</div>
  }

    //PRICE DETAILS JS
    const discountPercent = product.discountPercentage || 10
    const discountAmount = (product.p_price * discountPercent) / 100
    const discountedPrice = (product.p_price - discountAmount).toFixed(2)

    // ADD TO CART
    const handleAddCart =(product)=>{
        dispatch(cartAction(product))
    }  
  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        padding: '40px',
        alignItems: 'flex-start'
      }}
    >
      {/* LEFT SIDE - IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src={product.p_image}
          alt={product.p_code}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'contain',
            borderRadius: '10px'
          }}
        />
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: '10px' }}>{product.p_code}</h2>
         <h2 style={{ marginBottom: '10px' }}>{product.p_name}</h2>

        <p style={{ color: '#555', marginBottom: '15px' }}>
          {product.p_description}
        </p>

        <h3 style={{ color: 'orange' }}>⭐ {product.rating}</h3>

        {/* ✅ Price Section */}
        <div style={{ margin: '15px 0' }}>
          <h2 style={{ color: 'green' }}>₹ {discountedPrice}</h2>

          <p style={{ textDecoration: 'line-through', color: '#999' }}>
            ₹ {product.p_price}
          </p>

          <p style={{ color: 'red' }}>{discountPercent}% OFF</p>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#000',
              color: '#fff',
              cursor: 'pointer'
            }}
            onClick={()=>handleAddCart(product)}
          >
            Add to Cart
          </button>

          <button
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#555',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeProductDetails
