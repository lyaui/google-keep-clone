import styled from 'styled-components/macro';

export const SCardLinks = styled.div``;

export const SCardLink = styled.a`
  display: flex;
  height: ${(props) => (props.isOnlyLinks ? '88px' : '56px')};
  border-top: ${(props) =>
    props.index === 0 && props.isOnlyLinks ? 'unset' : '1px solid #cccccc'};
  overflow: hidden;
  background-color: rgba(250, 250, 250, 0.8);
`;

export const SCardLinkImg = styled.img`
  width: ${(props) => (props.isOnlyLinks ? '88px' : '56px')};
  background-color: #fff;
  object-fit: cover;
`;

export const SCardLinkInfo = styled.div`
  width: ${(props) =>
    props.isOnlyLinks ? 'calc(100% - 88px - 32px)' : 'calc(100% - 56px - 32px)'};
  padding: 8px 0 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SCardLinkTitle = styled.div`
  color: #202124;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SCardLinkUrl = styled.span`
  color: #80868b;
  margin-top: 4px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SCardLinkShare = styled.div`
  &button {
    margin-right: 20px;
  }
`;

export const SCardLinkMore = styled.div`
  padding: 8px 12px;
  border-top: 1px solid #cccccc;
  color: rgba(0, 0, 0, 0.702);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: rgba(250, 250, 250, 0.8);
`;
