import styled from 'styled-components/macro';

export const SLinkItem = styled.a`
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: rgba(250, 250, 250, 0.8);
`;

export const SLinkItemImg = styled.img`
  width: ${(props) => (props.isOnlyLinks ? '88px' : '56px')};
  background-color: #fff;
  object-fit: cover;
`;

export const SLinkItemInfo = styled.div`
  width: ${(props) =>
    props.isOnlyLinks ? 'calc(100% - 88px - 32px)' : 'calc(100% - 56px - 32px)'};
  padding: 8px 0 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SLinkItemTitle = styled.div`
  color: #202124;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SLinkItemUrl = styled.span`
  color: #80868b;
  margin-top: 4px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SLinkItemShare = styled.div`
  &button {
    margin-right: 20px;
  }
`;
