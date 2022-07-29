import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';


const GlobalStyle = createGlobalStyle`
    ${reset}
    html,body{
        font-size: 10px;
    }    
    body {
        padding: 20px;
        font-family: 'roboto-R','gothic-R','malgun gothic';
        background-color: rgb(253,197,246);
        color:rgb(0,0,0);
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: rgb(0,0,0);
    }
`;

export default GlobalStyle