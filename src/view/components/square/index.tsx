import React, { useState, useEffect } from "react";
import InterfaceSquares from "../../interfaces/square";

import { Box } from "./style";

const Square: React.FC<InterfaceSquares> = (props) => {
  const [animation, setAnimation] = useState("");

  const handleAnimation = (event: any) => {
    if (event === "open") {
      if (!animation) return setAnimation(event);
      return setAnimation("");
    }
    return false;
  };

  return (
    <Box bg={props.color} animation={animation}>
      <img src={props.img} alt="" />
      <figcaption>
        <span>{`Site Responsivo ${props.device.toUpperCase()}`}</span>
        <span>
          {props.content}
          {animation && animation === "open" ? (
            <span>Lorem ipsum dolor sit amet <br/> Lorem ipsum dolor sit amet</span>
          ) : (
            ""
          )}
        </span>
        <button onClick={() => handleAnimation(props.event)}>
          Leia mais...
        </button>
      </figcaption>
    </Box>
  );
};

export default Square;
