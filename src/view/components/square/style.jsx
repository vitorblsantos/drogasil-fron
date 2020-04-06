import styled from "styled-components";

export const Box = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  width: 360px;
  background: ${(props) => props.bg};
  margin-bottom:20px;
  img {
    margin: 16px 0 8px;
  }
  figcaption {
    display: flex;
    flex: 1 1 100%;
    flex-flow: column nowrap;
    background: #fff;
    padding-bottom:20px;
    span {
      padding: 12px 8px;
      min-height: 76px;
      font-size: 1.3em;
      :first-of-type {
        text-align: center;
        color: #fff;
        font-size: 2.3em;
        font-weight: 300;
        background: ${(props) => props.bg};
        padding-top:12px;
        font-weight:400;
      }
    }
    a {
      align-self: flex-end;
      margin-right: 16px;
      background: ${(props) => props.bg};
      padding:4px;
      color:#fff;
      font-size:1.5em;
    }
  }
`;
