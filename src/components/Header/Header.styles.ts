import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-image: url('/images/mobile/bg-pattern-header.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 10rem;
  padding: 2rem 1rem;
`;

export const Logo = styled.h1`
  color: ${(p) => p.theme.colors.white};
  font-size: 2.2rem;
`;
