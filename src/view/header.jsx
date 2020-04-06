import React from "react";
import { Helmet } from "react-helmet";
import ResetCSS from "./style/reset";
import { Container } from "./style/main";
import Menu from "./components/menu";

const Header = (props) => {
  let { theme } = props;
  return (
    <header>
      <Container>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
            rel="stylesheet"
          />
          {theme === "dark" ? <style>{'html,body{background:#000; transition:all .3s ease-in-out;}'}</style> : ""}
        </Helmet>
        <ResetCSS />
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
