import React from 'react'

const Services = () => {
  return (
    <section className="services">
        <div className="section-title services-title">
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
        <div className="section-center clearfix">
          {/* <!--single card--> */}
          <article className="service-card">
              <div className="service-img-container">
                  <img src="/images/products-1.webp" alt="single service" className="service-img"/>
                  <span className="service-icon">
                      <i className="fas fa-mortar-pestle fa-fw"></i>
                  </span>
              </div>
              <div className="service-info">
                  <h4>Study Abroad</h4>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptate laborum obcaecati officiis, doloribus hic!</p>
                  <a href="products.html" className="btn service-btn">read more</a>
              </div>
          </article>
          {/* <!--single card--> */}
          <article className="service-card">
            <div className="service-img-container">
                <img src="/images/products-2.webp" alt="single service" className="service-img"/>
                <span className="service-icon">
                    <i className="fas fa-home fa-fw"></i>
                </span>
            </div>
            <div className="service-info">
                <h4>Visa Assistance</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptate laborum obcaecati officiis, doloribus hic!</p>
                <a href="products.html" className="btn service-btn">read more</a>
            </div>
        </article>
        {/* <!--single card--> */}
        <article className="service-card">
          <div className="service-img-container">
              <img src="/images/products-3.webp" alt="single service" className="service-img"/>
              <span className="service-icon">
                  <i className="fas fa-mug-hot fa-fw"></i>
              </span>
          </div>
          <div className="service-info">
              <h4>Shortlisting </h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptate laborum obcaecati officiis, doloribus hic!</p>
              <a href="products.html" className="btn service-btn">read more</a>
          </div>
        </article>
        </div>
     </section>
  )
}

export default Services