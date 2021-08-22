import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

//url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;500;700&display=swap'); */

  html {
  /* color */

  /* size */

  /* others */  
  box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{

  }

  input{  
    border: none;
    outline: none;
  }

  button{
    flex-shrink: 0;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .notes-container {
    display:flex;
  }
  
`;
