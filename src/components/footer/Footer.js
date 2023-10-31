import "./style.css";
import logoffoter from "../../img/Group.svg";
import inst from "../../img/Frame 215.svg";
import tg from "../../img/bi_telegram.svg";
import phone from "../../img/phone.svg";
import mail from "../../img/mail.svg";
import location from "../../img/location.svg";
const Footer = () => {
    return ( 
      <div className="footer">
      <div className="container">
      <div className="logo_social">
          <img src={logoffoter} alt="f"/>
          <div className="social">
              <a href="https://www.instagram.com/" target="_blank"><img src={inst} alt="#"/></a>
              <a href="https://www.instagram.com/" target="_blank"><img src={tg} alt="#"/></a>
          </div>
      </div>
      <div className="contact_info">
          <div className="footer_links">
              <div className="contact_phone links">
                  <img src={phone} alt="#"/>
                  <a href="tel:+380502030291">+38 050 123 45 67</a>
               </div>
               <div className="contact_mail links">
                  <img src={mail} alt="#"/>
                  <a href="mailto:sotsium@gmail.com">sotsium@gmail.com</a>
               </div>
               <div className="contact_geo links">
                  <img src={location} alt="#"/>
                  <a href="https://maps.app.goo.gl/SUfp8SMcqksbN5rbA">Kyiv, Ukraine</a>
               </div>
          </div>
          <div className="sots">
              SOTSIUM ⓒ 2024
          </div>
      </div>
      </div>
  </div>
     );
}
 
export default Footer;