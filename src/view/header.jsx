import React from "react";
import { Helmet } from "react-helmet";
import ResetCSS from "./style/reset";
import { Container } from "./style/main";
import Menu from "./components/menu";

const Header = () => {
  return (
    <header>
      <Container>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <ResetCSS />
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
