import React from "react";
import Avt01 from "../../assets/images/layouts/avt-01.png";
import Quote from "../../assets/images/icon/quote.png";
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonials__main">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Testimonials</span>
                </h6>
                <h3 className="heading wow" data-splitting>
                  What People Say
                </h3>
              </div>

              <div className="swiper testimonials-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="box-testimonial center">
                      <img src={Quote} alt="Error..." />
                      <p className="text">
                        “ Curabitur eu est feugiat quam feugiat tristique non
                        vel erat. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque congue, nunc nec suscipit fringilla, augue
                        ligula eleifend velit. “
                      </p>
                      <div className="info">
                        <img src={Avt01} alt="Error..." />
                        <h5 className="name">Jacob Jones</h5>
                        <p>Chief Product Officer</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-testimonial center">
                      <img src={Quote} alt="Error..." />
                      <p className="text">
                        “ Curabitur eu est feugiat quam feugiat tristique non
                        vel erat. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque congue, nunc nec suscipit fringilla, augue
                        ligula eleifend velit. “
                      </p>
                      <div className="info">
                        <img src={Avt01} alt="Error..." />
                        <h5 className="name">Jacob Jones</h5>
                        <p>Chief Product Officer</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-testimonial center">
                      <img src={Quote} alt="Error..." />
                      <p className="text">
                        “ Curabitur eu est feugiat quam feugiat tristique non
                        vel erat. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque congue, nunc nec suscipit fringilla, augue
                        ligula eleifend velit. “
                      </p>
                      <div className="info">
                        <img src={Avt01} alt="Error..." />
                        <h5 className="name">Jacob Jones</h5>
                        <p>Chief Product Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
