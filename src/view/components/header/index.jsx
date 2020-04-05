import React from "react";
import { Helmet } from "react-helmet";

import Logo from "../../img/logo.png";
import Reset from "../../style/reset";
import { Container } from "../../style/main";

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
        
      </header>
    </Container>
  );
};

export default Header;
