import styled, { keyframes } from "styled-components";

const modalAnimation = keyframes`
  0% {
    top: -100px;
  }
  100% {
    top:0
  }`;

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 40%;
  width: 300px;
  height: 80px;
  background: #007f56;
  color: #fff;
  z-index: 2;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  font-size: 1.3em;
  animation: ${modalAnimation} 0.4s ease-in-out 0s;
  button {
    position: absolute;
    right: 4px;
    top: 4px;
    border-radius: 16px;
    width: 28px;
    height: 28px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width:768px){
    left:3%;
    width:95vw;
  }
`;
