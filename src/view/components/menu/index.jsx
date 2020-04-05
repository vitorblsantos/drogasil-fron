import React from "react";


const Menu = () => {
  return (
    <nav>
      <Menu>
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
      </Menu>
    </nav>
  );
};
