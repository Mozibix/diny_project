import { useState, React } from "react";
import logo from "../images/logo.svg";
import Hamburger from "./HamBurger";
import "../styles/nav.scss";

export const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="nav">
        <div className="top_nav">
          <div className="top_nav_inner">
            <div className="left_top_nav">
              <div className="call">
                <span>Call:</span> +234 9012624162
              </div>
              <div className="support">
                <span>Support:</span> info@yourcompany.com
              </div>
            </div>

            <div className="right_top_nav">
              <button className="login btn_secondary">Log In</button>
              <button className="register btn_primary">Register</button>
            </div>
          </div>
        </div>
        <nav className="nav">
          <img src={logo} alt="logo" />

          <div className="items">
            <ul className="nav_list">
              <li className="nav_item active">Home</li>
              <li className="nav_item">Services</li>
              <li className="nav_item">About </li>
              <li className="nav_item">Instructors</li>
              <li className="nav_item">Courses</li>
              <li className="nav_item">Blog</li>
            </ul>
          </div>

          <button className="btn_primary btn_s">Contact</button>

          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
        </nav>
      </div>
    </>
  );
};
