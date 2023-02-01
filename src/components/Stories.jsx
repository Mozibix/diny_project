import React from "react";
import successbg from "../images/successbg.png";
import success1 from "../images/success1.png";
import success2 from "../images/success2.png";
import success3 from "../images/success3.png";
import "../styles/stories.scss";

export const Stories = () => {
  return (
    <>
      <div className="stories">
        <img src={successbg} alt="success background" className="bg_success" />
        <div className="stories_inner">
          <div className="stories_header">
            <h4>Success Stories</h4>

            <div className="stories_img_sec">
              <div className="stories_img_sec_inner">
                <img src={success1} alt="successors" />
                <div className="circle_img">
                  <img className="active_img" src={success2} alt="successors" />
                </div>
                <img src={success3} alt="successors" />
              </div>
            </div>

            <div className="stories_quotes">
              <p>
                We have built hospitals, arranged doctor appointments have the
                diagnose and treat yourem ipsu r aol ad meniam, quis nostrud
                exercitation.We doctor appointments have the diagnose and treat
                yourem ipsu r exercitatranged docts have the diagnose and treat
                ipsu r aol{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
