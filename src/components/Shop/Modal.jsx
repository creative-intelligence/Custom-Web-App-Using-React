import React, { useContext, useState } from "react";
// import Zoom from "react-img-zoom";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Modal.css";

function Modal({ selectedProduct, onCloseModal, productImage }) {
  const { title, description, price, img, image } = selectedProduct;
  const [selectedImage, setSelectedImage] = useState(image);
  const { addToCart } = useContext(CartContext);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleAddToCart = () => {
    addToCart({ title, description, price });
  };


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCloseModal}>
          &times;
        </span>
        <div className="product-details">
          <div className="detailed-images">
            <div className="main-image">
              {/* <Zoom
                img={selectedImage}
                zoomScale={1.3}
                width={400}
                height={400}
              /> */}
              <img src={selectedImage} alt="" />
            </div>
            <div className="additional-images">
              {img.map((image, index) => (
                <div
                  key={index}
                  className={`additional-image ${
                    image === selectedImage ? "active" : ""
                  }`}
                  onClick={() => handleImageClick(image)}
                >
                  <img src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="product-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <h5>{`$${price}`}</h5>
            <button className="cart-btn" onClick={handleAddToCart}>
              <Link className="cart-btn" to="/cart">
                Add to Cart
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
