import React from "react";
import { Span } from "./style";

const ColorPallet = (props) => {
  return <Span hex={props.hex}>{props.hex}</Span>;
};

export default ColorPallet;
