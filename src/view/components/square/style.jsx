import styled from "styled-components";

export const Box = styled.figure`
  display: flex;
  height:${props=> props.animation === 'open' ? '372px' : '360px'}; 
  width:380px;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  background: ${(props) => props.bg};
  margin-bottom:20px;
  transition: all .3s ease-in-out;
  img {
    margin: 8px 0;
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
      font-size: 1.4em;
      letter-spacing:.1px;
      :first-of-type {
        text-align: center;
        color: #fff;
        font-size: 2.3em;
        font-weight: 300;
        background: ${(props) => props.bg};
        padding-top:12px;
        font-weight:400;
      }
      > span{
        background:transparent !important;
        font-size:1em !important;
        background: transparent !important;
        font-size: 1em !important;
        color: inherit !important;
      }
    }
    button {
      align-self: flex-end;
      margin-right: 16px;
      background: ${(props) => props.bg};
      padding:4px;
      color:#fff;
      font-size:1.5em;
      cursor:pointer;
      margin-top:auto;
      transition:all .3s ease-in-out;
    }
  }
  @media (max-device-width:1024px){
    flex:0 0 33%;
    margin-right: 2px;
    width:100%;
  }
`;
