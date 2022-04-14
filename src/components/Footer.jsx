import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container container">
        <h1 class="footer__title">Chizi</h1>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/chizi-wokoma-1b486a226/"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://wa.me/message/SIS6KX66WBZTK1"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>

          <a
            href="https://github.com/chiziivictor"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <a href="mailto: chiziwokoma@gmail.com" className="footer__scroll">
          <span className="footer__scroll-name">chiziwokoma@gmail.com</span>
        </a>

        <span class="footer__copy">
          &#169; Chiziivictor. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
