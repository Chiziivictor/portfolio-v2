import React from "react";

const Header = () => {
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">
          {" "}
          <h3>C</h3>
        </a>

        <div class="nav__menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                <i class="bx bx-home-alt"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#about" class="nav__link">
                <i class="bx bx-user"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#skills" class="nav__link">
                <i class="bx bx-book"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#work" class="nav__link">
                <i class="bx bx-briefcase"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="bx bx-message-rounded-detail"></i>
              </a>
            </li>
          </ul>
        </div>

        <a href="pdf/Chizi-Wokoma.pdf" class="button--ghost cv">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
