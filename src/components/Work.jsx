import React from "react";

const Work = () => {
  return (
    <section class="work section" id="work">
      <span class="section__subtitle">My Portfolio</span>
      <h2 class="section__title">Featured Works</h2>

      <div class="work__container container grid">
        <div class="work__card">
          <img src="img/work1.jpg" alt="" class="work__img" />

          <h3 class="work__title">Web design</h3>

          <div class="work__link">
            <a
              href="https://github.com/chiziivictor"
              target="_blank"
              class="work__button"
            >
              <i class="bx bxl-github work__icon"></i>
            </a>
            <a href="" class="work__button">
              <i class="bx bx-link-external work__icon"></i>
            </a>
          </div>
        </div>

        <div class="work__card">
          <img src="img/work2.jpg" alt="" class="work__img" />

          <h3 class="work__title">App movil</h3>

          <div class="work__link">
            <a
              href="https://github.com/chiziivictor"
              target="_blank"
              class="work__button"
            >
              <i class="bx bxl-github work__icon"></i>
            </a>
            <a href="" class="work__button">
              <i class="bx bx-link-external work__icon"></i>
            </a>
          </div>
        </div>

        <div class="work__card">
          <img src="img/work3.jpg" alt="" class="work__img" />

          <h3 class="work__title">Brand design</h3>

          <div class="work__link">
            <a
              href="https://github.com/chiziivictor"
              target="_blank"
              class="work__button"
            >
              <i class="bx bxl-github work__icon"></i>
            </a>
            <a href="" class="work__button">
              <i class="bx bx-link-external work__icon"></i>
            </a>
          </div>
        </div>

        <div class="work__card">
          <img src="img/work4.jpg" alt="" class="work__img" />

          <h3 class="work__title">Web design</h3>

          <div class="work__link">
            <a
              href="https://github.com/chiziivictor"
              target="_blank"
              class="work__button"
            >
              <i class="bx bxl-github work__icon"></i>
            </a>
            <a href="" class="work__button">
              <i class="bx bx-link-external work__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
