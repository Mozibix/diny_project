import React from "react";
import hero_image from "../images/hero-img";
import "../styles/hero.scss";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_inner">
          <img src={hero_image} alt="hero" />

          <div className="hero_left_side">
            <div className="hero_left_side_inner">
              <div className="hero_left_text">
                <p className="bold_text">
                  Give Your Child A Chance To Be Unique
                </p>
                <p className="light_text w_hero">
                  Experts agree that a child's personality doesn't fully form
                  until they are in elementary school. <br />
                  <span className="span_green">Sign in</span> to enroll your
                  child
                </p>
              </div>

              <div className="actions">
                <button className="btn_primary btn_s">Sign Up</button>
                <button className="btn_secondary btn_l">Learn more</button>
              </div>
            </div>
          </div>
          <div className="transparent_box"></div>
        </div>
      </div>
    </>
  );
};
