import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
    
    :root{
        --red: #E40F0F;
        --white: #ffffff;
        --black: #000000;
    }
    
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        box-sizing: border-box;
    }
`

export default GlobalCSS;