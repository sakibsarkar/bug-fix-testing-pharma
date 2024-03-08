import "./footer.css";
import React from "react";
import footerImg from "../../assets/testing_pharma.png";
import { pageScroll } from "../../Utils/PageScroll";

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className="container">
        <div className="footer-wrapper">
          <ul className="footer-nav-items">
            <li onClick={() => pageScroll("#how-operate")}>HOW WE OPERATE</li>
            <li onClick={() => pageScroll("#contact")}>CONTACT US TO PURCHASE</li>
            <li onClick={() => pageScroll(".lab-test")}>VERIFY A LAB TEST</li>
          </ul>
          <div className="footer-img-box" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={footerImg} alt="" />
          </div>
          <h5>© TESTING PHARMA {new Date().getFullYear()}</h5>
          <h6>Saavedra 542, Santa Cruz de la Sierra, Bolivia</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer;