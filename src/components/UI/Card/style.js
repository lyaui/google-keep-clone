import styled from 'styled-components/macro';

export const SCard = styled.div`
  background-color: ${(props) => props.color || '#FFFFFF'};
  border: 1px solid ${(props) => props.color || '#e0e0e0'};
  border-radius: 8px;
  cursor: pointer;
  grid-row: ${(props) => `span ${props.gridRowSpan}`};
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  }
`;
