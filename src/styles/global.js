import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  }

  :root {
  font-size: 62.5%;
  }

  body {
  background: ${({theme}) => theme.COLORS.BLACK_100};
  color: ${({theme}) => theme.COLORS.GRAY};

  -webkit-font-smoothing: antialiased;
  }

  body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  outline: none;
  }

  a {
  text-decoration: none;
  }

  button, a {
  cursor: pointer;
  transition: filter 0.2s;
  }

  button:hover, a:hover {
  filter: brightness(0.9);
  }

  /*  AUTO COMPLETE EMAIL  */
   /* Cor do texto do autocomplete */
   input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.GRAY};
   }
   /* Cor de fundo do autocomplete */
   input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BLACK_200} inset;
    background: content-box;
  }

/*  PASSWORD REVEALED  */
   ::-ms-reveal {
      border: 3px solid ${({theme}) => theme.COLORS.YELLOW};
      background-color: ${({theme}) => theme.COLORS.YELLOW}; 
      border-radius: 50%;
   }
`;