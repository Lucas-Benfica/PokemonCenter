import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
    
    :root{
        --red: #E40F0F;
        --white: #ffffff;
        --black: #000000;
        --lightblack: #1D1D1D;
        --lightgray: #EEEEEE;
        --border: #D5D5D5;
        --inputsform: #747474;
        --result: #DF8686;

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
        height: 100%;
        padding-top: 104px;
    }
`

export default GlobalCSS;