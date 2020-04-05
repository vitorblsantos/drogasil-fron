import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 12px;
`;

export const Menu = styled.ul`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  padding: 12px 0 16px;
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    background: #e0e0e0;
    bottom: 8px;
    border-radius: 2px;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    padding-top: 16px;
    li {
      padding: 0 12px;
      font-size: 1.8em;
      font-weight: 300;
    }
  }
  @media (max-width: 680px) {
    ul{
        position:absolute;
        flex-flow column nowrap;
        width:100%;
        padding:8px 0;
        top:91%;
        left:0;
    }
  }
`;
