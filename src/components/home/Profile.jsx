import React from "react";
import "./Profile.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Profile() {
  // const [zoom, setZoom] = useState(1);
  // const ZOOM_SPEED = 0.3;

  // const handleScrollZoom = (e) => {
  //   if (e.deltaY > 0) {
  //     setZoom(zoom + ZOOM_SPEED);
  //   } else {
  //     setZoom(zoom - ZOOM_SPEED);
  //   }
  // };
  return (
    <React.Fragment>
      <section className="profile">
         <div className="heading">
            <div className="top">
              <h1>
                <span>
                  The Easiest <br />
                  Way To Increase Capacity of <br /> Your
                </span>
                <span className="bold"> Website</span>
              </h1>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born.
              </p>
            </div>
            <div className="play">
              <button className="read">Read More</button>
              <i className="fa-solid fa-circle-play"></i>
              <p> Watch The Video</p>
            </div>
          </div>
          
          <div    className="pic"
          //  onWheel={handleScrollZoom} style={{ transform: `scale(${zoom})` }}
           >
            <img src="img/profile.jpg" alt="ProfileImage" />
          </div>
         
      </section>
      
    </React.Fragment>
  );
}

export default Profile;
