import React from "react";
import instructor1 from "../images/instructor1.png";
import instructor2 from "../images/instructor2.png";
import instructor3 from "../images/instructor3.png";
import date from "../images/date_w.svg";
import "../styles/instructors.scss";

export const Instructors = () => {
  return (
    <>
      <div className="instructors">
        <div className="instructors_inner">
          <h4>Our Instructors & Teachers</h4>
          <div className="quotes">
            <p>
              We have the best teachers and instructors that would be able to
              train your kids, making them Creative, God fearing, Respectfull
              and Intelligent.{" "}
            </p>
          </div>

          <div className="instructors_img_sec">
            <div className="img_box">
              <img className="instructor" src={instructor1} alt="instructors" />
              <div className="img_box_info">
                <button className="btn_secondary btn_ss">Full time</button>
                <div className="qualification">
                  <p>Masters in Geology </p>
                </div>
                <div className="date">
                  <img src={date} alt="date" />
                  <p>28th April 2021</p>
                </div>
              </div>
            </div>
            <div className="img_box">
              <img className="instructor" src={instructor2} alt="instructors" />
              <div className="img_box_info">
                <button className="btn_secondary btn_ss">Full time</button>
                <div className="qualification">
                  <p> Doctor appointments have the diagnose</p>
                </div>
                <div className="date">
                  <img src={date} alt="date" />
                  <p>28th April 2021</p>
                </div>
              </div>
            </div>
            <div className="img_box">
              <img className="instructor" src={instructor3} alt="instructors" />
              <div className="img_box_info">
                <button className="btn_secondary btn_ss">Full time</button>
                <div className="qualification">
                  <p> Doctor appointments have the diagnose</p>
                </div>
                <div className="date">
                  <img src={date} alt="date" />
                  <p>28th April 2021</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn_primary btn_l">See all </button>
        </div>
      </div>
    </>
  );
};
