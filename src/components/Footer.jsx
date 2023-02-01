import React from "react";
import "../styles/footer.scss";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_inner">
          <div className="logo_sec">
            <img src="" alt="" />

            <div className="logo_quotes">
              <p>
                Replenish him third creature and meat blessed void a fruit
                gathered you're, they're two waters own morning gathered
                greater.
              </p>
            </div>
          </div>
          {/* // */}
          <div className="footer_details">
            <div className="footer_details_inner">
              <div className="header_sec">
                <h4>About Us</h4>
                <div className="line"></div>
              </div>

              <div className="footer_items">
                <ul>
                  <li>Afficiates</li>
                  <li>Partners</li>
                  <li>Reviews</li>
                  <li>Blogs</li>
                </ul>
              </div>
            </div>
          </div>
          {/* // // */}
          <div className="footer_details">
            <div className="footer_details_inner">
              <div className="header_sec">
                <h4>Popular Classes</h4>
                <div className="line"></div>
              </div>

              <div className="footer_items">
                <ul>
                  <li>Creche</li>
                  <li>Primary</li>
                  <li>Secondary</li>
                  <li>Highschool</li>
                </ul>
              </div>
            </div>
          </div>
          {/* // // */}
          <div className="footer_details">
            <div className="footer_details_inner">
              <div className="header_sec">
                <h4>Newsletter</h4>
                <div className="line"></div>
              </div>

              <div className="footer_items">
                <p>Sign up to newsletter to get Latest updates</p>
                <div className="input_sec">
                  <input
                    type="email"
                    placeholder="Enter Email address"
                    name="email"
                  />
                  <div className="icon_click"></div>
                </div>
                <ul>
                  <li>icon</li>
                  <li>icon</li>
                  <li>icon</li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        <div className="bottom_line"></div>

        <div className="bottom_footer_text">
          <p>Copywright @ 2020 Dinnygreen international</p>
        </div>
      </footer>
    </>
  );
};
