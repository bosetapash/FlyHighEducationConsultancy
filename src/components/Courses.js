import React from 'react'

const Courses = () => {
  return (
  <section className="products">
        <div className="section-center clearfix">
            <article className="products-info">
                  <div className="section-title">
                    <h3>check out</h3>
                    <h2>our courses</h2>
                  </div>
                  <p className="product-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                      Error quo molestias perspiciatis numquam voluptatem exercitationem aperiam sunt, 
                      et in harum vitae eligendi! Assumenda, facere dolorum.
                  </p>
                  <a href="products.html" className="btn">inventory</a>
              </article>
            <article className="products-inventory clearfix">
                <div className="product">
                    <img src="./images/courses-1.webp" alt="single product" className="product-img"/>
                    <h4 className="product-title">Short Term</h4>
                </div>
                <div className="product">
                  <img src="./images/courses-2.webp" alt="single product" className="product-img"/>
                  <h4 className="product-title">Bachelors</h4>
              </div>
              <div className="product">
                <img src="./images/courses-3.webp" alt="single product" className="product-img"/>
                <h4 className="product-title">Masters</h4>
            </div>
            <div className="product">
              <img src="./images/courses-4.webp" alt="single product" className="product-img"/>
              <h4 className="product-title">Phd</h4>
          </div>
            </article>
        </div>
     </section>
  )
}

export default Courses
