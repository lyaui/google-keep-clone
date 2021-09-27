import styled from 'styled-components/macro';
import { SLinkItem } from 'components/UI/LinkItem/style.js';

export const SCardLink = styled(SLinkItem)`
  height: ${(props) => (props.isOnlyLinks ? '88px' : '56px')};
  border-top: ${(props) =>
    props.index === 0 && props.isOnlyLinks ? 'unset' : '1px solid #cccccc'};
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
