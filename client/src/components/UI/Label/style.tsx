import styled from 'styled-components';

export const SLabelButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: var(--rounded-full);
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

export const SLabel = styled.div<{ variant: 'round' | 'square' }>`
  padding: 3px 12px 3px 12px;
  margin: 3px 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: 0.5px;
  color: var(--color-text);
  background-color: var(--color-label-bg);
  border: 1px solid var(--color-border);
  border-radius: ${(props) =>
    props.variant === 'round' ? 'var(--rounded-2xl)' : 'var(--rounded-sm)'};
  cursor: pointer;
  transition: var(--transition);
  position: relative;

  &:hover {
    padding: ${(props) =>
      props.variant === 'round' ? '3px 16px 3px 8px' : '3px 12px 3px 12px'};
  }

  &:hover ${SLabelButton} {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
