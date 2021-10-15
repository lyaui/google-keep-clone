import styled from 'styled-components/macro';

export const SHeader = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 8px;
  position: sticky;
  z-index: 50;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%), 0px 1px 10px 0px rgb(0 0 0 / 10%),
    0px 2px 4px -1px rgb(0 0 0 / 10%);
`;

export const SHeaderLogo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const SHeaderTitle = styled.div`
  width: 0px;
  min-width: 200px;
  padding: 0 8px;
  font-size: 20px;
  color: #191919;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
