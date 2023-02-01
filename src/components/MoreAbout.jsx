import React from "react";
import more_about_img from "../images/more-about-img";
import checkbox from "../images/checkbox.svg";
import "../styles/moreabout.scss";

export const MoreAbout = () => {
  return (
    <>
      <div className="more_about">
        <div className="more_about_inner">
          <div className="more_about_left">
            <div className="more_about_left_inner">
              <div className="bold_text">
                <p>Find Out More About Our Learning Experience</p>
              </div>

              <div className="light_text">
                <p>
                  We have built hospitals, arranged doctor appointments have the
                  diagnose and treat yourem ipsu r aol ad meniam, quis nostrud
                  exercitation.
                </p>
              </div>

              <div className="list_items">
                <ul>
                  <li>
                    <img src={checkbox} alt="checkbox" />{" "}
                    <p> Culture in diversity</p>
                  </li>
                  <li>
                    <img src={checkbox} alt="checkbox" />{" "}
                    <p> We have built hospitals,</p>
                    arranged doctor.
                  </li>
                  <li>
                    <img src={checkbox} alt="checkbox" />{" "}
                    <p> We have built hospitals,</p>
                    arranged doctor.
                  </li>
                </ul>
              </div>

              <button className="btn_primary btn_l">Learn more</button>
            </div>
          </div>

          <div className="more_about_right">
            <img src={more_about_img} alt="more about" />
          </div>
        </div>
      </div>
    </>
  );
};
