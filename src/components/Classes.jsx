import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import up from "../images/up.svg";
import right from "../images/right.svg";
import right_p from "../images/right_p.svg";
import date from "../images/date.svg";
import lesson from "../images/lesson.svg";
import "../styles/classes.scss";

export const Classes = () => {
  return (
    <>
      <div className="classes">
        <div className="classes_inner">
          <div className="classes_top">
            <div className="header_details">
              <h4>Popular Classes</h4>
              <p className="light_text">
                We have built hospitals, arranged doctor appointments have the
                diagnose and treat yourem ipsu r aol ad meniam, quis nostrud
                exercitation.
              </p>
            </div>

            <div className="green_box">
              <div className="inner_green">
                <img src={up} alt="up" />
              </div>
            </div>
          </div>

          <div className="classes_bottom">
            <div className="classes_flexbox">
              <div className="class_box">
                <div className="box_info">
                  <img src={pic1} alt="lecturers" />
                  <div className="lesson_date">
                    <div className="lesson flex">
                      <img src={lesson} alt="lesson" />
                      <p>35 Lessons</p>
                    </div>
                    <div className="date flex">
                      <img src={date} alt="date" />
                      <p>28th April 2021</p>
                    </div>
                  </div>

                  <div className="class_box_green_text ">
                    <p className="text_green">Creche</p>
                  </div>

                  <div className="class_box_quotes">
                    <p>
                      For anyone validating Framer as a professional prototyping
                      tool.
                    </p>
                  </div>
                </div>

                <button className="btn_primary">
                  Enroll Now
                  <img src={right} alt="right" />
                </button>
              </div>
              <div className="class_box">
                <div className="box_info">
                  <img src={pic2} alt="lecturers" />
                  <div className="lesson_date">
                    <div className="lesson flex">
                      <img src={lesson} alt="lesson" />

                      <p>35 Lessons</p>
                    </div>
                    <div className="date flex">
                      <img src={date} alt="date" />
                      <p>28th April 2021</p>
                    </div>
                  </div>

                  <div className="class_box_green_text ">
                    <p className="text_green">Transition</p>
                  </div>

                  <div className="class_box_quotes">
                    <p>
                      For anyone validating Framer as a professional prototyping
                      tool.
                    </p>
                  </div>
                </div>
                <button className="btn_primary">
                  <div className="inner_btn">
                    Enroll Now
                    <img src={right_p} alt="right" />
                  </div>
                </button>
              </div>
              <div className="class_box">
                <div className="box_info">
                  <img src={pic3} alt="lecturers" />
                  <div className="lesson_date">
                    <div className="lesson flex">
                      <img src={lesson} alt="lesson" />

                      <p>35 Lessons</p>
                    </div>
                    <div className="date flex">
                      <img src={date} alt="date" />
                      <p>28th April 2021</p>
                    </div>
                  </div>

                  <div className="class_box_green_text ">
                    <p className="text_green">Nursery</p>
                  </div>

                  <div className="class_box_quotes">
                    <p>
                      For anyone validating Framer as a professional prototyping
                      tool.
                    </p>
                  </div>
                </div>
                <button className="btn_primary">
                  <div className="inner_btn">
                    Enroll Now
                    <img src={right_p} alt="right" />
                  </div>
                </button>{" "}
              </div>
            </div>
            <button className="btn_primary btn_l">View all courses</button>
          </div>
        </div>
      </div>
    </>
  );
};
