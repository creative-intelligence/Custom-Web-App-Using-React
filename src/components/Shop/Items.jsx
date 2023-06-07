import React, { useState } from "react";
import Data from "./ProductsData";
import "./Items.css";
import Modal from "./Modal";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Items(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // Number of slides to scroll at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    console.log(product)
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const Backdrop = (props) => {
    return <div className="backdrop"></div>;
  };
 

  return (
    <React.Fragment>
      <div className="Products-container">
        <h3>Popular Picks in MyDecor</h3>
        
        <div className="products">
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000 } infinite={true}>
          {Data.map((product,index) => (
         
            <div key={index} className="product-1">
              <div
                className="upper"
               
                onClick={() => openModal(product)}
              >
                 {product.status && <div className="tag">{product.status}</div>}
                <div className="item-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <img src={product.image} alt="" />
              </div>
{/* 
              <div className="lower">
                <p>{product.title}</p>
                <a href="/">{product.description}</a>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h5>{`$${product.price}`}</h5>
              </div> */}
            </div>
          ))}
           </Carousel>
        </div>
      </div>

      {showModal && selectedProduct && (
        <>
          <Backdrop onClick={closeModal}/>
          <Modal selectedProduct={selectedProduct} onCloseModal={closeModal} />
        </>
      )}
    </React.Fragment>
  );
}

export default Items;
