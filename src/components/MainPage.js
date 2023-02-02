import React from "react";
import { Classes } from "./Classes";
import { ContactUs } from "./ContactUs";
import { Features } from "./Features";
import { FindOut } from "./FindOut";
import { Hero } from "./Hero";
import { Instructors } from "./Instructors";
import { LearningSystem } from "./LearningSystem";
import { MoreAbout } from "./MoreAbout";
import { Nav } from "./Nav";
import { Stories } from "./Stories";
import "../styles/main.scss";
import "../styles/_media_screens.scss";
import { Footer } from "./Footer";

const MainPage = () => {
  return (
    <>
      <div className="home">
        <div className="home_inner">
          {/* NAVBAR  */}

          <Nav />

          <main>
            {/* HERO */}
            <section className="hero_sec">
              <Hero />
            </section>
            <div className="main_container">
              {/* LEARNING SYSTEM */}
              <section className="learning_system_sec">
                <LearningSystem />
              </section>

              {/* FEATURES */}
              <section className="features_sec">
                <Features />
              </section>

              {/* MORE ABOUT  */}
              <section className="more_about_sec">
                <MoreAbout />
              </section>

              {/* CLASSES SECTION */}
              <section className="classes_sec">
                <Classes />
              </section>

              {/* FIND OUT SECTION */}
              <section className="find_out_sec">
                <FindOut />
              </section>

              {/* STORIES */}
              <section className="stories_sec">
                <Stories />
              </section>

              {/* INSTRUCTORS */}
              <section className="instructors_sec">
                <Instructors />
              </section>

              {/* CONTACT US */}
              <section className="contact_us_sec">
                <ContactUs />
              </section>

              <section className="footer_sec">
                <Footer />
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainPage;
