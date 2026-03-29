import React from 'react'
import './HomeProductDetails.css'
import { useLocation } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const HomeProductDetails = () => {
  const product = useLocation().state
  console.log(product)
  if (!product) {
    return <div> ITEM GETTING LOAD......</div>
  }

  return (
    <div>
      <Container className='text-center'>
        <h1>PRODUCT DETAILS</h1>
        <div
          className='product-card'
          style={{
            width: '350px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
          }}
        >
          {/* Image */}
          <img
            src={product.p_image}
            alt={product.p_code}
            style={{
              width: '100%',
              height: '180px',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
          {/* Product Code / Title */}
          <h3 style={{ margin: '10px 0', fontSize: '18px' }}>{product.p_code}</h3>

          {/* Description */}
          <p
            style={{
              fontSize: '14px',
              color: '#555',
              height: '40px',
              overflow: 'hidden'
            }}
          >
            {product.p_description}
          </p>

          {/* Rating */}
          <h4 style={{ margin: '8px 0', color: 'orange' }}>⭐ {product.rating}</h4>

          {/* Price */}

          <h4 style={{ margin: '8px 0', color: 'green' }}>₹ {product.p_price}</h4>
          <Button>ADD TO CART</Button>
          &nbsp;
          <Button>BUY</Button>

        </div>
      </Container>
    </div>
  )
}

export default HomeProductDetails
