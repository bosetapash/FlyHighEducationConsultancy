import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Courses from './components/Courses'
import Services from './components/Services'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import CountryList from './components/CountryList'


function App() {
  return (
    <>
      <Navbar/>
     <About/>
     <Courses/>
     <Services/>
     <Contacts/>
     <CountryList/>
     <Footer/>
    </>)
}

export default App;
