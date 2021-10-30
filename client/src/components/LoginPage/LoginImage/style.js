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
  text-shadow: 0 0 10px rgb(0 0 0 / 50%);
`;

export const SLoginImageText = styled.div`
  padding: 32px 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: hsl(var(--color-white));
  text-shadow: 0 0 20px rgb(0 0 0 / 80%);
`;

export const SLoginImageButton = styled.button`
  font-size: 1.6rem;
  background-color: hsla(var(--color-yellow), 0.9);
  padding: 16px;
  border-radius: var(--rounded-lg);
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  transition: var(--transition);
  :hover {
    background-color: hsl(var(--color-yellow));
  }
`;
