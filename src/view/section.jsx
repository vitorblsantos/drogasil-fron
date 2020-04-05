import React from "react";
import Color from "./components/dotColored";

import { Container, Bold, Title3, Paragraph } from "./style/main";

const Section = () => {
  return (
    <Container>
      <section>
        <Title3>
          Crie este site <Bold>responsivo</Bold> com <Bold>REACT</Bold> utilizando <Bold>styled-components</Bold>
        </Title3>
        <Paragraph>
            A fonte utilizada é a Open Sans de 300 a 800.<br />exemplo: "Open Sans", Helvetica, sans-serif, arial; <br/>
            Já as cores são:<br/>
            <Color hex="#007F56"/>,<Color hex="#868686"/>,<Color hex="#FE9481"/> e<Color hex="#9C8CB9"/>
        </Paragraph>
      </section>
    </Container>
  );
};

export default Section;
