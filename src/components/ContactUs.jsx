import React from "react";
import "../styles/contact_us.scss";

export const ContactUs = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_inner">
          <div className="contact_header">
            <h4>Contact Us</h4>
          </div>

          <div className="form_sec">
            <form>
              <div className="top_form">
                <input type="text" placeholder="Name" name="name" />
                <input type="email" placeholder="Email" name="email" />
                <input type="tel" placeholder="Phone" name="tel" />
                <input type="text" placeholder="Subject" name="text" />
              </div>

              <div className="bottom_form">
                <input type="text" placeholder="Message" name="text" />
              </div>

              <button type="button " className="btn_l">
                Send now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
