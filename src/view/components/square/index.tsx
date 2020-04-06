import React from "react";
import InterfaceSquares from "../../interfaces/square";

import { Box } from "./style";

const Square: React.FC<InterfaceSquares> = (props) => {
  return (
    <Box bg={props.color}>
      <img src={props.img} alt="" />
      <figcaption>
        <span>{`Site Responsivo ${props.device.toUpperCase()}`}</span>
        <span>{props.content}</span>
        <a href="#">Leia mais...</a>
      </figcaption>
    </Box>
  );
};

export default Square;
