import { createGlobalStyle } from "styled-components";
import BG from "../img/background.jpg";

const Reset = createGlobalStyle`
*{
    box-sizing:border-box;
}

html, body{
    font-size: 12px;
    font-family: "Open Sans",Helvetica, sans-serif, arial;
    margin: 0;
    padding: 0;
    color:#868686;
    letter-spacing:-1.3px;
}

body{
    background:url(${BG});
}

div, img, figure, figcaption, ul, li, h3, p{
    margin: 0;
    padding:0; 
}

button, select, input{
    border:0;
    :focus{
        outline:none
    }
}
a{
    color: #007f56;
    text-decoration:none;
    display:flex;
}

li{
    list-style-type:none;
}

section{
    margin: 12px 0;
    padding:4px 0;
}

img{
    display:flex;
    align-self:center;
}

`;

export default Reset;
