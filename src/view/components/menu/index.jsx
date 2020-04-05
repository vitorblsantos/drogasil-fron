import React from "react";
import Logo from "../../img/logo.png";
import {ContainerMenu} from './style';


const Menu = () => {
  return (
    <nav>
      <ContainerMenu>
        <li>
          <a href="./">
            <img src={Logo} alt="Home" />
          </a>
        </li>   
        <ul>
          <li>
            <a href="./">HTML5</a>
          </li>
          <li>
            <a href="./">CSS3</a>
          </li>
          <li>
            <a href="./">JAVASCRIPT</a>
          </li>
          <li>
            <a href="./">REACT</a>
          </li>
          <li>
            <a href="./">REDUX</a>
          </li>
        </ul>
      </ContainerMenu>
    </nav>
  );
};

export default Menu;
