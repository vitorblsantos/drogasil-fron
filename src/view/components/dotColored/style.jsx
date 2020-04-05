import styled from "styled-components";

export const Span = styled.span`
  position: relative;
  min-width: max-content;
  :not(:first-of-type) {
    margin: 12px 0 0 28px;
  }
  :before {
    content: "";
    background: ${(props) => props.hex || "aliceblue"};
    position: absolute;
    left: -20px;
    top: 16px;
    width: 16px;
    height: 16px;
    border-radius: 12px;
  }
`;
