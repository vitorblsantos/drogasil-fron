import { createGlobalStyle } from "styled-components";
import BG from "../img/background.jpg";

const Reset = createGlobalStyle`
*{
    box-sizing:border-box;
}
html, body{
    font-size: 12px;
    font-family: Nunito,sans-serif;
    margin: 0;
    padding: 0;
}
body{
    background:url(${BG});
}
div, img, figure, figcaption, h1,h2, p{
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
    color: #0b3c88;
}`;

export default Reset;
