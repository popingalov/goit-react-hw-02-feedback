import styled from 'styled-components';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  padding-left: 0;

  list-style: none;
`;

export { StyledList };
