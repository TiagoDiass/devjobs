import styled from 'styled-components';

export const JobsListContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3.5rem;

  @media (min-width: ${(p) => p.theme.mediaQueries.medium}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }

  @media (min-width: ${(p) => p.theme.mediaQueries.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
