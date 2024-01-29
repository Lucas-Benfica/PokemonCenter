import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
    
    :root{
        --red: #E40F0F;
        --white: #ffffff;
        --black: #000000;
        --lightblack: #1D1D1D;

        --homeimage: url("/images/pokemon-hero.jpg");
    }
    
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-top: 104px;
        padding-bottom: 72px;
        
        position: relative; 
    }
`

export default GlobalCSS;