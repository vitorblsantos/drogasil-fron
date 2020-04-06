import React from "react";
import { Container } from "./style/main";

import Partnerships from "./components/partnerships";

const Footer = () => {
  return (
    <footer>
      <Container>
        <nav>
          <ul>
            <li>
              <a href="#">RD 2017. Todos os direitos reservevados</a>
            </li>
            <li>
              <Partnerships />
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};
export default Footer;
