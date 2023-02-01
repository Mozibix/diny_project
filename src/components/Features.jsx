import React from "react";
import features from "../images/features.png";
import "../styles/features.scss";

export const Features = () => {
  return (
    <>
      <div className="features">
        <img src={features} alt="features" />
        <div className="features_inner">
          <div className="features_header">
            <p className="bold_text">Our Features</p>
          </div>

          <div className="features_text">
            <p className="light_text .text_light">
              Dinny Green International School is nurtured in grace and truth,
              raising green, flourishing and successful children.
            </p>
          </div>

          <div className="features_flexbox">
            <div className="features_flexbox_inner">
              <div className="white_box">
                <div className="white_box_inner">
                  <div className="left_side_box">
                    <div className="circle"></div>
                  </div>
                  <div className="right_side_box">
                    <div className="top_text">Awesome Teachers</div>
                    <div className="bottom_text light_text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod ukkf tempor incididunt u.
                    </div>
                  </div>
                </div>
              </div>
              <div className="white_box">
                <div className="white_box_inner">
                  <div className="left_side_box">
                    <div className="circle"></div>
                  </div>
                  <div className="right_side_box">
                    <div className="top_text">Global Recognition</div>
                    <div className="bottom_text light_text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod ukkf tempor incididunt u.
                    </div>
                  </div>
                </div>
              </div>
              <div className="white_box">
                <div className="white_box_inner">
                  <div className="left_side_box">
                    <div className="circle"></div>
                  </div>
                  <div className="right_side_box">
                    <div className="top_text">Extra curricular activities</div>
                    <div className="bottom_text light_text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod ukkf tempor incididunt u.
                    </div>
                  </div>
                </div>
              </div>
              <div className="white_box">
                <div className="white_box_inner">
                  <div className="left_side_box">
                    <div className="circle"></div>
                  </div>
                  <div className="right_side_box">
                    <div className="top_text">Government Approved</div>
                    <div className="bottom_text light_text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod ukkf tempor incididunt u.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
