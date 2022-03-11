import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram,FaYoutube } from 'react-icons/fa'
import '../styles.css'
import { social } from './data'


const Navbar = () => {
  return (
          <header id="home">
       <nav className="navbar">
          <div className="nav-center">
    {/* <!-- nav header --> */}
    <div className="nav-header">
      <img src='./beFunky-sample.png' className="nav-logo" alt="Fly High" /> 
    </div>
    {/* <!-- end of nav header -->
    <!-- nav links --> */}
    <ul className="nav-links" id="nav-links">
      <li>
        {/* <!-- single link --> */}
        <a href="#home" className="scroll-link nav-link">
          home
        </a>
      </li>
      {/* <!-- end of single link -->
      <!-- single link --> */}
      <li>

        <a href="#about" className=" scroll-link nav-link">
          about
        </a>
      </li>
      {/* <!-- end of single link -->
      <!-- single link --> */}
      <li>

        <a href="#services" className="nav-link scroll-link">
          services
        </a>
      </li>
      {/* <!-- end of single link -->
      <!-- single link --> */}
      <li>


        <a href="#featured" className="nav-link scroll-link">
          featured
        </a>
      </li>
      {/* <!-- end of single link -->
      <!-- single link --> */}
      <li>

        <a href="#gallery" className="nav-link scroll-link">
          gallery
        </a>
      </li>
      {/* <!-- end of single link --> */}
    </ul>
    {/* <!-- end of nav links -->
    <!-- nav social media icons -->
    <!-- footer icons --> */}
    <ul class="nav-icons">
      {
            social.map(link=>{
            const {id,url,icon} = link
            return (
            <li key={id}>
                  <a href={url} className="nav-icon">{icon}</a>
            </li>
            )
            })
      } 
      {/* { <!-- end of nav social media icons -->  */}
    </ul>
    </div>
   </nav>
      </header>
  )
}

export default Navbar
