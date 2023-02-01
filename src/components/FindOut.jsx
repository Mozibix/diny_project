import React from "react";
import findout_img from "../images/findout.png";
import play from "../images/play.svg";
import "../styles/findout.scss";

export const FindOut = () => {
  return (
    <>
      <div className="find_out">
        <div className="find_out_inner">
          <div className="find_out_header">
            <h4>Find Out How We Help Students</h4>
          </div>

          <div className="find_out_quotes">
            <p className="light_text">
              authentic 'voice and choice' matter and a big part of this is
              leaving 'room for interpretation' in the assignment. Those gray
              areas can confuse students unaccustomed to agency and choice, but
              once they become comfortable with it, it can be a significant
              factor in helping them show what their 'best' actually is.
            </p>
          </div>

          <div className="find_out_image">
            <div className="image_box">
              <img src={findout_img} alt="find out" />
            </div>
            <div className="play">
              <img src={play} alt="play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
