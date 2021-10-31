import styled from 'styled-components/macro';

export const SLoginImage = styled.div`
  flex: 1;
  padding: 50px;
  background-image: var(--image);
  background-repeat: no-repeat;
  background-position: center;

  > div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SLoginImageTitle = styled.div`
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: hsl(var(--color-white));
  text-shadow: var(--text-shadow);
`;

export const SLoginImageText = styled.div`
  padding: 32px 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: hsl(var(--color-white));
  text-shadow: var(--text-shadow);
`;

export const SLoginImageButton = styled.button`
  font-size: 1.6rem;
  background-color: hsla(var(--color-yellow), 0.9);
  padding: 16px;
  border-radius: var(--rounded-lg);
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  :hover {
    background-color: hsl(var(--color-yellow));
  }
`;
