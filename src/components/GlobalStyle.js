import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
        font-family: 'Intern', sans-serif;
        overflow-x: hidden;
    }

    html {
        @media (max-width: 1500px) {
            font-size: 75%;
        }
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;

        &:hover {
            background-color: #23d997;
            color: white;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;

        @media (max-width: 1200px) {
            font-size: 3rem;
        }

        @media (max-width: 720px) {
            font-size: 2rem;
        }
    }

    h3 {
        color: white;
    }
    
    h4 {
        font-size: 2rem;
        font-weight: bold;
    }

    a {
        font-size: 1.1rem;
    }

    span {
        font-weight: bold;
        color: #23d997
    }

    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;

        @media (max-width: 1200px) {
            font-size: 1.1rem;
        }

        @media (max-width: 720px) {
            font-size: 0.9rem;
        }
    }
`;

export default GlobalStyle;