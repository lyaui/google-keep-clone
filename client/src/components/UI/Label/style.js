import styled from 'styled-components/macro';

export const SLabelButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  opacity: 0;
  padding: 4px;
  position: absolute;
  right: -7px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SLabel = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: #3c4043;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 50px;
  padding: 4px 12px 4px 12px;
  margin: 3px 2px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  :hover {
    padding: ${(props) => (props.isShowMoreLabel ? '4px 12px 4px 12px' : '4px 16px 4px 8px')};
  }
  :hover ${SLabelButton} {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
