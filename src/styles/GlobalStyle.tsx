import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 60%;
    }

    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;

        font-size: 1.6rem;
        font-family: 'inter', sans-serif;
    }

    body, html{
        width: 100vw;
        height: 100vh;
    }   

    body{
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    ul, ol{
        list-style: none;
    }

    button, a{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`




