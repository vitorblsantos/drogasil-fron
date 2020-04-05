import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`

*{
    box-sizing:border-box;
}
html, body{
    color: #fff;
    font-size: 12px;
    font-family: Nunito,sans-serif;
    margin: 0;
    padding: 0;
}
div, img, figure, figcaption, h1,h2, p{
    margin: 0;
    padding:0; 
}
button,select{
    border:0;
    :focus{
        outline:none
    }
}
a{
    color: #0b3c88;
}

button, input, select {
    :focus {
        outline: none;
      }
}
`
export default Reset