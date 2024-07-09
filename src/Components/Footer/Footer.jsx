import React from 'react';
import './Footer.css';
import linkedin from "../Assets/entypo-social_linkedin-with-circle.svg";
import instagram from "../Assets/entypo-social_instagram-with-circle.svg";
import facebook from "../Assets/akar-icons_facebook-fill.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div>
      <h5>Get the good stuff</h5>
      <p>Connect with us on social media.Follow us on social media for sleep tips,new arrivals and exclusive 
        offers </p>
        <div>
      <img src={linkedin} alt="" />
      <img src={instagram} alt="" />
      <img src={facebook} alt="" />
     </div>
      </div>
      
    
    <div className='company'>
      <div>Company</div>
      <div>Our Story</div>
      <div>Our Blog</div>
      <div>Shop Haven</div>
      <div>FAQ</div>
     </div>
     <div className='customer-services'> 
      <div>Customer services</div>
      <div>Contact Us</div>
      <div>My Account</div>
      <div>Shipping and Returns</div>
     </div>
    
     
    </div>
  )
}

export default Footer;