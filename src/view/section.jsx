import React from "react";
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
        </Paragraph>
      </section>
    </Container>
  );
};

export default Section;
