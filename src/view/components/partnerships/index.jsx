import React from "react";

import Drogaraia from "../../img/logo_drogaraia.png";
import Drogasil from "../../img/logo_drogasil.png";
import Farmasil from "../../img/logo_farmasil.png";
import Univers from "../../img/logo_univers.png";
import xbio from "../../img/logo_4bio.png";

import { List } from "./style";

const Partnerships = () => {
  return (
    <List>
      <li>
        <a href="./">
          <img src={Drogaraia} alt="" />
        </a>
      </li>
      <li>
        <a href="./">
          <img src={Drogasil} alt="" />
        </a>
      </li>
      <li>
        <a href="./">
          <img src={Farmasil} alt="" />
        </a>
      </li>
      <li>
        <a href="./">
          <img src={Univers} alt="" />
        </a>
      </li>
      <li>
        <a href="./">
          <img src={xbio} alt="" />
        </a>
      </li>
    </List>
  );
};

export default Partnerships;
