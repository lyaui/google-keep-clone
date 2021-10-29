import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --transition-basic:all .3s;

    /* colors */
    --color-transparent:transparent;
    --color-black: 0, 0%, 0%; // rgb(0%, 0%, 0%)
    --color-white: 0, 0%, 100%; // hsl(0, 0%, 100%)

    --color-blue: 217, 89%, 61%; // hsl(217, 89%, 61%);
    --color-blue-darker: 218, 85%, 43%; //hsl(218, 85%, 43%);
    --color-purple: 267, 85%, 43%; //hsl(267, 85%, 43%)

    --color-gray-100: 200, 12%, 95%; // hsl(200, 12%, 95%)
    --color-gray-200: 216, 12%, 92%; // hsl(216, 12%, 92%)
    --color-gray-500: 210, 6%, 63%; // hsl(210, 6%, 63%)
    --color-gray-600: 207, 5%, 52%; // hsl(207, 5%, 52%) 
    --color-gray-700: 213, 5%, 39%; // hsl(213, 5%, 39%)
    --color-gray-800: 206, 6%, 25%; // 	hsl(206, 6%, 25%)
    --color-gray-900: 225, 6%, 13%; // hsl(225, 6%, 13%)


    
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    font-weight: 500;
    line-height: 1.5;
  }

  // refer to root CSS variables
  body[data-theme='LIGHT'] {
    --color-text: hsl(var(--color-gray-900));
    --color-bg: hsl(var(--color-white));
    --color-link-bg: hsla(var(--color-white),.8);
    --color-link-url:hsl(var(--color-gray-600));
    --color-link-border: hsla(var(--color-black),.12);
    --color-label-bg: hsla(var(--color-black),.08);
    --color-label-border: hsl(var(--color-transparent));
    --color-anchor-text: hsl(var(--color-blue-darker));
    --color-anchor-visited: hsl(var(--color-purple));
  }
  
  body[data-theme='DARK'] {
    --color-text: hsl(var(--color-gray-200));
    --color-bg: hsl(var(--color-gray-900));
    --color-link-bg: hsla(var(--color-white),.08);
    --color-link-url:hsl(var(--color-gray-500));
    --color-link-border: hsla(var(--color-gray-200),.5);
    --color-label-bg: hsl(var(--color-transparent));
    --color-label-border: hsla(var(--color-gray-200),.5);
    --color-anchor-text: hsl(var(--color-gray-200));
    --color-anchor-visited: hsl(var(--color-gray-200));
  }
  }

  body{
    height: 100%;
    font-family: Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    background-color: var(--color-bg);
    transition: all .3s;
  }

  img {
    max-width: 100%;
    display: block;
  } 

  div{
    outline:none;
  }

  a{
    font-weight: 600;
    color: var(--color-anchor-text);
    text-decoration: none;
    :visited {
      color: var(--color-anchor-visited)
    }
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
