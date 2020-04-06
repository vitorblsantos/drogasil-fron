import React from "react";
import Color from "./components/dotColored";
import Square from "./components/square/index.tsx";

import Desktop from "./img/desktop-responsive-design.png";
import Tablet from "./img/tablets-responsive-design.png";
import Mobile from "./img/mobile-responsive-design.png";

import {
  Container,
  ContainerSquare,
  Bold,
  Title3,
  Paragraph,
} from "./style/main";

const Main = () => {
  return (
    <main>
      <Container>
        <section>
          <Title3>
            Crie este site <Bold>responsivo</Bold> com <Bold>REACT</Bold>{" "}
            utilizando <Bold>styled-components</Bold>
          </Title3>
          <Paragraph>
            A fonte utilizada é a Open Sans de 300 a 800.
            <br />
            exemplo: "Open Sans", Helvetica, sans-serif, arial; <br />
            Já as cores são:
            <br />
            <Color hex="#007F56" />,<Color hex="#868686" />,
            <Color hex="#FE9481" />,<Color hex="#FCDA92" /> e
            <Color hex="#9C8CB9" />
          </Paragraph>
          <ContainerSquare>
            <Square
              img={Desktop}
              device="Desktop"
              content={[
                "Quando pressionado o botão ",
                <strong>Leia mais...</strong>,
                <br />,
                " o restante da informação deverá aparecer em scroll down.",
              ]}
              btn="Leia mais..."
              color="#FE9481"
            />
            <Square
              img={Tablet}
              device="Tablet"
              content={[
                "Quando pressionado o botão ",
                <strong>Leia mais...</strong>,
                <br />,
                " o restante da informação deverá aparecer em um popup na tela.",
              ]}
              btn="Leia mais..."
              color="#FCDA92"
            />
            <Square
              img={Mobile}
              device="Mobile"
              content={[
                "Quando pressionado o botão ",
                <strong>Alterar tema</strong>,
                <br />,
                " modifique o tema do site para blackfriday a seu gosto.",
              ]}
              btn="alterar tema"
              color="#9C8CB9"
            />
          </ContainerSquare>
        </section>
      </Container>
    </main>
  );
};

export default Main;
