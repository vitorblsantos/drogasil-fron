import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 12px;
`;

export const ContainerSquare = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Bold = styled.span`
  font-weight: 800;
`;

export const Title3 = styled.h3`
  color: #007f56;
  font-size: 4.9em;
  font-weight: 300;
  text-align: center;
  line-height: 60px;
  margin: 20px 0;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 2.8em;
  font-weight: 300;
  line-height:40px;
  margin: 24px 0 20px;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size:1.2em;
  > li {
    :nth-of-type(2) {
      flex: 0 0 65%;
      justify-content: flex-start;
    }
  }
  a{
    color:#868686;
  }
`;
