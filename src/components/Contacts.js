import React from 'react'

const Contacts = () => {
  return (
    <section className="contact clearfix">
        <article className="contact-info">
            {/* <!--contact item--> */}
            <div className="contact-item">
                <h4 className="contact-title">
                    <span className="contact-icon">
                        <i className="fas fa-location-arrow"></i>
                    </span>
                    address
                </h4>
                <h4 className="contact-text">
                    523 N Fairfax Ave <br/>
                    Los ANgeles,CA 90048
                </h4>
            </div>
            {/* <!--contact item--> */}
            <div className="contact-item">
              <h4 className="contact-title">
                  <span className="contact-icon">
                      <i className="fas fa-envelope"></i>
                  </span>
                  email
              </h4>
              <h4 className="contact-text">
                  john@gmail.com
              </h4>
          </div>
          {/* <!--contact item--> */}
          <div className="contact-item">
            <h4 className="contact-title">
                <span className="contact-icon">
                    <i className="fas fa-phone"></i>
                </span>
                telephone
            </h4>
            <h4 className="contact-text">
                + 123 456 789
            </h4>
        </div>
        </article>
        <article className="contact-form">
           <h3>contact us</h3>
           <form action="">
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="name"/>
                    <input type="email" className="form-control" name="email" placeholder="email"/>
                    <textarea name="message" placeholder="message" className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-btn btn">submit here</button>
           </form>
        </article>
    </section>
  )
}

export default Contacts