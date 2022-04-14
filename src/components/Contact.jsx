import React from "react";

const Contact = () => {
  return (
    <section class="contact section" id="contact">
      <span class="section__subtitle">Get in touch</span>
      <h2 class="section__title">Contact Me</h2>

      <div class="contact__container container grid">
        <div class="contact__content">
          <div class="contact__info">
            <div class="contact__card">
              <i class="bx bx-mail-send contact__card-icon"></i>
              <h3 class="contact__cart-title">Email</h3>
              <span class="contact__card-data">chiziwokoma@gmail.com</span>

              <a
                href="mailto: chiziwokoma@gmail.com"
                target="_blank"
                class="contact__button"
              >
                Write me{" "}
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div class="contact__card">
              <i class="bx bxl-whatsapp contact__card-icon"></i>
              <h3 class="contact__cart-title">Whatsapp</h3>
              <span class="contact__card-data">+234 903 739 0992</span>

              <a
                href="https://wa.me/message/SIS6KX66WBZTK1"
                target="_blank"
                class="contact__button"
              >
                Write me{" "}
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div class="contact__card">
              <i class="bx bxl-twitter contact__card-icon"></i>
              <h3 class="contact__cart-title">Twitter</h3>
              <span class="contact__card-data">@chiziivictor</span>

              <a
                href="https://twitter.com/chiziivictor"
                target="_blank"
                class="contact__button"
              >
                Write me{" "}
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact__content">
          <h3 class="contact__title">Write me your project</h3>

          <form action="" class="contact__form">
            <div class="contact__form-div">
              <label for="" class="contact__form-tag">
                Names
              </label>
              <input
                type="text"
                placeholder="Insert your name"
                class="contact__form-input"
              />
            </div>

            <div class="contact__form-div">
              <label for="" class="contact__form-tag">
                Mail
              </label>
              <input
                type="text"
                placeholder="Insert your email"
                class="contact__form-input"
              />
            </div>

            <div class="contact__form-div contact__form-area">
              <label for="" class="contact__form-tag">
                Project
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write your project"
                class="contact__form-input"
              ></textarea>
            </div>

            <button class="button contact__form-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
