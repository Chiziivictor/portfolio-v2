import React from "react";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hi, my name is</span>
          <h1 className="home__name">Chizi Victor.</h1>
          <h3 className="home__education">I create online environments.</h3>
          <p className="home__desc">
            I’m a Software developer specializing in building (and occasionally
            designing) exceptional digital experiences. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Nemo dolor porro quod, repellat
            similique esse!.
          </p>

          <div className="home__buttons">
            <a href="#work" className="button button--ghost">
              My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
