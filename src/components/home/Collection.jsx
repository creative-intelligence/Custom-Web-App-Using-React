import React from "react";
import "./Collection.css";

function Collection() {
  return (
    <React.Fragment>
      <div className="collection">
        <div className="left">
          <div className='img-div'>
            <h2>Mini Rugs <br />
            From $50
            </h2>
            <img src="img/banner1.jpg" alt="collection1" />
          </div>
          <div className='img-div'>
          <h2>Sale 50% off <br />
            Table Lamp
            </h2>
            <img src="img/banner2.jpg" alt="collection2" />
          </div>
        </div>

        <div className="center ">
            <div className='img-div'>
              <h2>Top Rated SideBoards  <br />
              Under $150
              </h2>
              <div className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
              </div>
              
              <img src="img/banner3.jpg" alt="collection3" />
            </div>
        </div >

        <div className="right">
          <div className='img-div'>
          <h2>Appliances For <br />
          Kitchen
            </h2>
            <img src="img/banner4.jpg" alt="collection1" />
          </div>
          <div className='img-div'> 
          <h2>Office Chair <br />
            New Styles
            </h2>
            <img src="img/banner5.jpg" alt="collection2" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Collection;
