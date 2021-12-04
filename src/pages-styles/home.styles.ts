import styled from 'styled-components';

export const JobsListContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3.5rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
