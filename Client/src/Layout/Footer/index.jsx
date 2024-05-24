import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import "../Footer/style.scss"

const Footer = () => {
  return (
    <div className='container'>
<div className="footer">
<div className="about">
  <h4>About Us</h4>
  <br />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.</p>
</div>
<div className="links">
  <h4>Quick Links</h4>
  <br />
  <ul>
    <li>Sell online</li>
    <li>Features</li>
    <li>Shopping cart</li>
    <li>Store builder</li>
    <li>Mobile commerce</li>
    <li>Dropshipping</li>
    <li>Website development</li>
    <li>Point of sale</li>
    <li>Hardware</li>
    <li>Software</li>
  </ul>
</div>
<div className="info">
  <h4>Contact Info</h4>
  <br />
  <div className="location">  
  <FaLocationDot />
  <p>203 Fake St. Mountain View, San Francisco, California, USA</p></div>
<div className="num">
  <FaPhoneAlt />  
  <p>+2 392 3929 210</p>
</div>
<div className="mail">
  <IoMdMail /> 
   <p>emailaddress@domain.com</p>
</div>

</div>


</div>
<div className="subscribe">
  <h4>Subscribe</h4>
  <br />
  <input type="text" placeholder='Email' className='input'/>
  <button className='send-btn'>SEND</button>
</div>
<div className="bottom-footer">
<p>Copyright ©2024 All rights reserved | This template is made with <FaHeart />
  by <button className='footer-txt'>Colorlib</button> </p>
</div>
    </div>
  )
}

export default Footer