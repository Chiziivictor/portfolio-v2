import React from "react";

const Services = () => {
  return (
    <section class="services section">
      <span class="section__subtitle">My Services</span>
      <h2 class="section__title">What I Offer</h2>

      <div class="services__container container grid">
        {/* 1st Service Card */}
        <div class="services__card">
          <h3 class="servicer__title">
            UI/UX <br /> Design
          </h3>

          <span class="services__button">
            See more <i class="bx bx-right-arrow-alt services__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <i class="bx bx-x services__modal-close"></i>

              <h3 class="services__modal-title">UI/UX Design</h3>
              <p class="services__modal-description">
                Service with more than 2 years of Experience. Providing quality
                work to clients and companies.
              </p>

              <ul class="services__modal-list">
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">Web page devlopment.</p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2nd Service Card */}
        <div class="services__card">
          <h3 class="servicer__title">
            Front-end <br /> Development
          </h3>

          <span class="services__button">
            See more <i class="bx bx-right-arrow-alt services__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <i class="bx bx-x services__modal-close"></i>

              <h3 class="services__modal-title">Product Designer</h3>
              <p class="services__modal-description">
                Service with more than 2 years of Experience. Providing quality
                work to clients and companies.
              </p>

              <ul class="services__modal-list">
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">Web page devlopment.</p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3rd Service Card */}
        <div class="services__card">
          <h3 class="servicer__title">
            Full-stack <br /> Development
          </h3>

          <span class="services__button">
            See more <i class="bx bx-right-arrow-alt services__icon"></i>
          </span>

          <div class="services__modal">
            <div class="services__modal-content">
              <i class="bx bx-x services__modal-close"></i>

              <h3 class="services__modal-title">Visual Designer</h3>
              <p class="services__modal-description">
                Service with more than 2 years of Experience. Providing quality
                work to clients and companies.
              </p>

              <ul class="services__modal-list">
                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">Web page devlopment.</p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li class="services__modal-item">
                  <i class="bx bx-check services__modal-icon"></i>
                  <p class="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
