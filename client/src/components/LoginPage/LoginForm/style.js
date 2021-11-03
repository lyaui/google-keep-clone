import styled from 'styled-components/macro';

export const SLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 385px;
  padding: 60px 50px;
  color: hsl(var(--color-gray-700));
  background: hsl(var(--color-white));
  p {
    font-weight: var(--font-thin);
    display: block;
    padding-top: 20px;
    font-size: var(--text-lg);
    letter-spacing: 2px;
  }
  span {
    letter-spacing: 1px;
    text-align: center;
    font-weight: var(--font-thin);
    font-size: var(--text-base);
  }
`;

export const SLoginFormLogo = styled.img`
  width: 200px;
`;

export const SLoginFormSeparator = styled.div`
  color: hsl(var(--color-gray-400));
  font-size: var(--text-sm);
  padding: 24px 0;
  width: 100%;

  :after {
    display: inline-block;
    width: 40%;
    margin: 0 0 4px 20px;
    height: 1px;
    content: ' ';
    background-color: hsl(var(--color-gray-400));
  }
  :before {
    display: inline-block;
    width: 40%;
    margin: 0 20px 4px 0;
    height: 1px;
    content: ' ';
    background-color: hsl(var(--color-gray-400));
  }
`;

export const SFormHint = styled.span`
  u {
    cursor: pointer;
  }
`;
