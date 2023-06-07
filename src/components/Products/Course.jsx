import React, { useState } from "react";
import "./Course.css";


const Course = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section>
      <div className="container">
        <div className="course-name">
          <div className="tabs head">
            <i className="fa-solid fa-book"></i>
            <h4>Courses</h4>
          </div>

          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Web Applications
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Desktop Applications
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Android Applications
          </button>
        </div>

        <div className="course-content">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="library">
            <div className="data">
                <img src="img/ML.jpg" alt="" />
              <div className="free" >

                Free Courses
                <h5>Machine Learning & <br /> Data  Science Bootcamp</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            
            <div className="data">
                <img src="img/nodejs.png" alt="" />
              <div className="free" >

                Free Courses
                <h5>Node JS & <br /> Backend Development</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/digital.webp" alt="" />
              <div className="free" >

                Free Courses
                <h5>Digital Marketing & <br /> Networking</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/Local Seo.jpg" alt="" />
              <div className="free" >

                Free Courses
                <h5>Seo Optimization & <br /> Digital Marketing</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            
            </div>
          
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
               <div className="library">
            <div className="data">
                <img src="img/Content.png" alt="" />
              <div className="free" >

                Free Courses
                <h5>Content Writing & Blog <br /> Posting</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/flutter.jpeg" alt="" />
              <div className="free" >

                Free Courses
                <h5>Flutter  & Dart <br /> Development </h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/nodejs.png" alt="" />
              <div className="free" >

                Free Courses
                <h5>Node JS & <br /> Backend Development</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/Google.jpg" alt="" />
              <div className="free" >

                Free Courses
                <h5>Google Adds & Social <br /> Media Marketing</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
              <div className="library">
              <div className="data">
                <img src="img/digital.webp" alt="" />
              <div className="free" >

                Free Courses
                <h5>Digital Marketing & <br /> Networking</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/Content.png" alt="" />
              <div className="free" >

                Free Courses
                <h5>Content Writing & Blog <br /> Posting</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/react.jpeg" alt="" />
              <div className="free" >

                Free Courses
                <h5>React JS & <br /> Web Development</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            <div className="data">
                <img src="img/Local Seo.jpg" alt="" />
              <div className="free" >

                Free Courses
                <h5>Seo Optimization & <br /> Digital Marketing</h5>
              </div>
              <p className="text" >Free</p>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Course;
