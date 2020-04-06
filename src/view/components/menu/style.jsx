import styled from "styled-components";

export const ContainerMenu = styled.ul`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  padding: 8px 0 16px;
  &:before {
    content: "";
    position: absolute;
    height: 1px;
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
      padding: 0 8px;
      font-size: 1.8em;
      font-weight: 300;
    }
  }
  @media (max-width: 680px) {
    ul{
        visibility:hidden;
        position:absolute;
        flex-flow column nowrap;
        width:100%;
        padding:8px 0;
        top:91%;
        left:0;
    }
  }
`;
