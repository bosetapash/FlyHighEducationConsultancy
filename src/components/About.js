import React from 'react'

const About = () => {
  return (
//     <!--about -->
       <section>
          <div className="section-center clearfix">
              <article className="about-img">
                  <div className="about-picture-container">
                    <img src="/images/about.webp" alt="" className="about-picture"/>
                  </div>
              </article>
              <article className="about-info">
                  <div className="section-title">
                      <h3>about our</h3>
                      <h2>Fly High</h2>
                  </div>
                  <p className="about-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempore ab? Recusandae dolorem dolorum in?
                  </p>
                  <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempore ab? Recusandae dolorem dolorum in?
                </p>
                <a href="about.html" className="btn">learn more</a>
              </article>
          </div>
       </section>
  )
}

export default About
