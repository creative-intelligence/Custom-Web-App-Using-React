import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer-content">
          <h1>Ready for a better store?</h1>
          <h6>Build your store today!</h6>
          <button className="footer-btn">PURCHASE NOW</button>
        </div>

        <img src="img/footer.png" alt="FooterImg" />
      </footer>
    </React.Fragment>
  );
}

export default Footer;
