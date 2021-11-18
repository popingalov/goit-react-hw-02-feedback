import styled from 'styled-components';

const Title = styled.h2`
  color: tomato;
`;

const ListItem = styled.li`
  cursor: pointer;

  &:hover > ${Title} {
    color: blue;
  }
`;

export { Title, ListItem };
