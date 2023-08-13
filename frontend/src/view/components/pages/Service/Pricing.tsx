import React from "react";

function Pricing() {
  return (
    <>
      <div className="tokyo_tm_pricing">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Pricing</h3>
          </div>
          <div className="list">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="price">
                    <h3>
                      <span>
                        0<span className="currency">$</span>
                      </span>
                    </h3>
                  </div>
                  <div className="plan">
                    <h3>Free</h3>
                  </div>
                  <ul className="item">
                    <li className="active">
                      <p>Premium Icons</p>
                    </li>
                    <li>
                      <p>Quality Logo</p>
                    </li>
                    <li>
                      <p>Stock Images</p>
                    </li>
                    <li>
                      <p>Free Support</p>
                    </li>
                  </ul>
                  <div className="tokyo_tm_button" data-position="left">
                    <a href="#">
                      <span>Purchase</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="price">
                    <h3>
                      <span>
                        30<span className="currency">$</span>
                      </span>
                    </h3>
                  </div>
                  <div className="plan">
                    <h3>Basic</h3>
                  </div>
                  <ul className="item">
                    <li className="active">
                      <p>Premium Icons</p>
                    </li>
                    <li className="active">
                      <p>Quality Logo</p>
                    </li>
                    <li>
                      <p>Stock Images</p>
                    </li>
                    <li>
                      <p>Free Support</p>
                    </li>
                  </ul>
                  <div className="tokyo_tm_button" data-position="left">
                    <a href="#">
                      <span>Purchase</span>
                    </a>
                  </div>
                  <span className="popular">Popular</span>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="price">
                    <h3>
                      <span>
                        70<span className="currency">$</span>
                      </span>
                    </h3>
                  </div>
                  <div className="plan">
                    <h3>Premium</h3>
                  </div>
                  <ul className="item">
                    <li className="active">
                      <p>Premium Icons</p>
                    </li>
                    <li className="active">
                      <p>Quality Logo</p>
                    </li>
                    <li className="active">
                      <p>Stock Images</p>
                    </li>
                    <li className="active">
                      <p>Free Support</p>
                    </li>
                  </ul>
                  <div className="tokyo_tm_button" data-position="left">
                    <a href="#">
                      <span>Purchase</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
