import React from "react";

const Skills = () => {
  return (
    <section class="skills section" id="skills">
      <span class="section__subtitle">My abilities</span>
      <h2 class="section__title">My Experience</h2>

      <div class="skills__container grid container">
        {/* First Skills Content */}
        <div class="skills__content">
          <h3 class="skills__title">Frontend developer</h3>

          <div class="skills__box">
            {/* First Skill Group  */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">HTML</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">CSS</h3>
                  <span class="skills__level">Advanced</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">JavaScript</h3>
                  <span class="skills__level">Basic</span>
                </div>
              </div>
            </div>

            {/* Second Skill Group */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Bootstrap</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Git</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">React</h3>
                  <span class="skills__level">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Skills Content */}
        <div class="skills__content">
          <h3 class="skills__title">Backend developer</h3>

          <div class="skills__box skills__box__two">
            {/* First Skill Group */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Node.JS</h3>
                  <span class="skills__level">Advanced</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">MongoDB</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Python</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            {/* Second Skill Group */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Express</h3>
                  <span class="skills__level">Basic</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Git</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              {/* <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Python</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <a href="#contact" className="button skills__cta button--ghost">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Skills;
