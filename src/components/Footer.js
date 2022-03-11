import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram,FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <section>
      {/* // <!--Footer---> */}
          <footer className="footer">
              <div className="section-center">
                  <div className="social-icons">
                      <a href="#" className="social-icon">
                          {<FaTwitter/>}
                      </a>
                      <a href="#" className="social-icon">
                        {<FaFacebook/>}
                      </a>
                      <a href="#" className="social-icon">
                       {<FaInstagram/>}
                     </a>
                     <a href="#" className="social-icon">
                      {<FaLinkedin/>}
                   </a>
                    <a href="#" className="social-icon">
                    {<FaYoutube/>}
                   </a>
                  </div>
                  <h4 className="footer-text">
                      &copy;
                      <span id="date"></span>
                      <span className="company">Dream High</span>
                      all rights reserved
                  </h4>
              </div>
          </footer>
      </section>
  )
}

export default Footer