import React from "react"
import { Helmet } from "react-helmet"

import Banner from "../../components/banner"
import ContactForm from "../../components/Forms/contact"

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | MHSCS</title>
      </Helmet>

      {/* <!-- start banner Area --> */}
      <Banner page="Contact" link="/contact" />
      {/* <!-- End banner Area --> */}

      {/* start contact area */}
      <section className="contact-page-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex flex-column address-wrap">
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home" />
                </div>
                <div className="contact-details">
                  <h5>Malden, Massachusetts</h5>
                  <p>77 Salem St, Malden, MA 02148</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope" />
                </div>
                <div className="contact-details">
                  <h5>computerclubmalden@gmail.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* end contact area */}
    </React.Fragment>
  )
}

export default Contact
