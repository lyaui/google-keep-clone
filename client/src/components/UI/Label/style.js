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
  svg {
    fill: var(--color-icon);
  }
`;

export const SLabel = styled.div`
  padding: 3px 12px 3px 12px;
  margin: 3px 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: var(--color-text);
  background-color: var(--color-label-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--rounded);
  cursor: pointer;
  transition: all 0.3s;
  position: relative;

  :hover {
    padding: var(--padding);
  }

  :hover ${SLabelButton} {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
