import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-image: url('/images/mobile/bg-pattern-header.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 10rem;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.mediaQueries.medium}) {
    border-end-start-radius: 6rem;
  }
`;

export const Logo = styled.h1`
  color: ${(p) => p.theme.colors.white};
  font-size: 2.2rem;
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  width: 100%;
`;
