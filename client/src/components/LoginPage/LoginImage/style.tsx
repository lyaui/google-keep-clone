import styled from 'styled-components';

export const SLoginImage = styled.div<{ imgUrl: string }>`
  flex: 1;
  padding: 50px;
  background-image: ${(props) => props.imgUrl};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  > div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SLoginImageTitle = styled.div`
  font-size: var(--text-2xl);
  font-weight: var(--font-thin);
  letter-spacing: 2px;
  color: hsl(var(--color-white));
  text-shadow: var(--text-shadow);
`;

export const SLoginImageText = styled.div`
  padding: 32px 0;
  font-size: var(--text-md);
  font-weight: var(--font-light);
  color: hsl(var(--color-white));
  text-shadow: var(--text-shadow);
`;

export const SLoginImageButton = styled.button`
  font-size: var(--text-md);
  background-color: hsla(var(--color-yellow), 0.9);
  padding: 16px;
  border-radius: var(--rounded-lg);
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  &:hover {
    background-color: hsl(var(--color-yellow));
  }
`;
