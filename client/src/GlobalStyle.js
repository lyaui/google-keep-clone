import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --transition-basic:all .3s;

    /* colors */
    --color-transparent:transparent;
    --color-white:#ffffff;
    --color-gray-100:#f1f3f4;
    --color-gray-200: #e8eaed;
    --color-gray-700:#5f6368;
    --color-gray-800:#3c4043;
    --color-gray-900:#202124;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 2rem;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    font-family: Roboto, Arial, sans-serif;
    transition: all .3s;
  }

  body[data-theme='LIGHT'] {
    color: var(--color-gray-900);
    background-color: var(--color-white);
}
  body[data-theme='DARK'] {
    color: var(--color-gray-200);
    background-color: var(--color-gray-900);
}

  div{
    outline:none;
  }

  a{
    text-decoration: none;
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
    letter-spacing: 1px;
  }

  .notes-container {
    display:flex;
    height: calc(100vh - 64px);

    main{
      width: 100%;
      overflow: scroll;
    }
  }
  .spinner {
    animation: spin infinite 0.8s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
   to {
     transform: rotate(360deg);
   }
}

`;
