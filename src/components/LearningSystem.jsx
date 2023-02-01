import React from "react";
import system_img from "../images/system-img";
import "../styles/learningsystem.scss";

export const LearningSystem = () => {
  return (
    <>
      <div className="learning_system">
        <div className="learning_system_inner container">
          <div className="system_left_side">
            <div className="system_left_side_inner">
              <img src={system_img} alt="system" />
            </div>
            <div className="circle"></div>
          </div>

          <div className="system_right_side">
            <div className="system_right_side_inner">
              <div className="system_header bold_text ">
                <h4 className="small">
                  Advance Learning System Around The World
                </h4>
              </div>

              <div className="light_text">
                <p>
                  We have made a collaborative effort in bringing together
                  scientific expertise from other countries, steered jointly by
                  their governments on the basis of shared, policy-driven
                  interests.{" "}
                </p>
              </div>

              <div className="stats">
                <div className="teacher_stats">
                  <div className="count ">
                    <h5>
                      25k<sup>+</sup>
                    </h5>
                  </div>
                  <div className="count_text">
                    <p className="light_text">Teachers</p>
                  </div>
                </div>
                <div className="courses_stats">
                  <div className="count">
                    <h5>
                      74k<sup>+</sup>
                    </h5>
                  </div>
                  <div className="count_text">
                    <p className="light_text">Active Courses</p>
                  </div>
                </div>
                <div className="curricular_stats">
                  <div className="count">
                    <h5>
                      250<sup></sup>
                    </h5>
                  </div>
                  <div className="count_text">
                    <p className="light_text">Extra Curricular </p>
                  </div>
                </div>
              </div>
              <button className="btn_primary btn_l">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
