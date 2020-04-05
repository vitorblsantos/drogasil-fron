import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../img/logo.png";
import Reset from "../../style/reset";
import { Container, Menu } from "../../style/main";

const Header = () => {
  return (
    <Container>
      <header>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Reset />
        <nav>
          <Menu>
            <li>
              <a href="./">
                <img src={Logo} alt="Home" />
              </a>
            </li>
            <ul>
              <li>
                <a href="./">HTML5</a>
              </li>
              <li>
                <a href="./">CSS3</a>
              </li>
              <li>
                <a href="./">JAVASCRIPT</a>
              </li>
              <li>
                <a href="./">REACT</a>
              </li>
              <li>
                <a href="./">REDUX</a>
              </li>
            </ul>
          </Menu>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
