import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
    
    :root{
        --red: #E40F0F;
        --white: #ffffff;
        --black: #000000;
        --lightblack: #1D1D1D;
    }
    
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    body {
        display: flex;
        background-color: #E40F0F;
        flex-direction: column;
        min-height: 100vh;

        position: relative; 
        padding-top: 104px;
        padding-bottom: 72px;
    }

    main {
        flex: 1;
    }

`

export default GlobalCSS;