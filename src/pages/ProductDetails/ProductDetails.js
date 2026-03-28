import React from "react";
import "./ProductDetails.css";
import { useLocation, useDispatch } from "react-router-dom";
import { cartAction } from "../../redux/action/cartData";


const ProductDetails = () => {
  // const dispatch = useDispatch()
  const product = useLocation().state;
  // console.log(location, "This is product details")
  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  // const handleCart = (p_data) => {
  //   dispatch(cartAction(p_data))
  // }

  const imageUrl = product.p_image?.startsWith("http")
    ? product.p_image
    : "https://www.maximawatches.com/cdn/shop/files/69100CMGY-A_79d56a17-b371-4bba-9086-cbce49e8de86.jpg?v=1739601173";

  return (
    <div className="details-container">
      <div className="details-card">
        {/* Left - Image */}
        {/* <div className="details-image-section"> */}
        <div className="details-image-section">
          <div className="image-box">
            <img src={imageUrl} alt={product.p_name} />
          </div>
          {/* </div> */}
        </div>

        {/* Right - Info */}
        <div className="details-info">
          <h1 className="details-title">{product.p_name}</h1>

          <p className="details-code">Code: {product.p_code}</p>

          <p className="details-price">₹{product.p_price}</p>

          <p className="details-description">
            {product.p_description}
          </p>

          <div className="details-actions">
            <button className="btn primary">Buy Now</button>
            <button className="btn secondary" >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;