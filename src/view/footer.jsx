import React from "react";
import { Container, FooterList } from "./style/main";

import Partnerships from "./components/partnerships";

import Logo from "./img/logo_small.png";

const Footer = () => {
  return (
    <footer style={{margin:'auto 0 16px'}}>
      <Container>
        <nav>
          <FooterList>
            <li>
              <a href="./">RD 2017. Todos os direitos reservevados</a>
            </li>
            <li>
              <Partnerships />
            </li>
            <li>
              <a href="./">
                <img src={Logo} alt="Home" />
              </a>
            </li>
          </FooterList>
        </nav>
      </Container>
    </footer>
  );
};
export default Footer;
