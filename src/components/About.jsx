import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    const el = aboutRef.current;
    gsap.to(el, {
      x: "-80vw",
      duration: 8,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 5%",
        scrub: 1,
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>
      <h1 className="animate animate__about" ref={aboutRef}>
        About
      </h1>

      <div className="about__container container grid">
        <div className="about__handle">
          <img src="img/c4_original-rmbg.png" alt="" className="about__img" />
        </div>
        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className="bx bx-award about__icon"></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">2 Years Working</span>
            </div>

            <div className="about__box">
              <i className="bx bx-briefcase-alt about__icon"></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">10+ Projects</span>
            </div>

            <div className="about__box">
              <i className="bx bx-support about__icon"></i>
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">Online 24/7</span>
            </div>
          </div>

          <p className="about__description">
            Web Developer and Python Programmer. I build elegant and responsive
            web pages and I write Python code. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ullam quo eaque cumque minima debitis
            obcaecati, doloremque ducimus nulla id quasi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            libero eaque eveniet harum sed temporibus possimus distinctio
            dolorem debitis, ex repellat asperiores animi consequuntur. Nemo
            non, perferendis voluptate. Incidunt quis repudiandae sit aliquid,
            sequi a. Et eius eos illo iusto!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
