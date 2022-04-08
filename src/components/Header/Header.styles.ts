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
  font-size: 2rem;
  cursor: pointer;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  column-gap: 0.5rem;
  color: #fff;

  svg {
    width: 20px;
  }

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .checkbox:checked+.label .ball {
    transform: translateX(12px);
  }

  .label {
    width: 34px;
    height: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: space-between;
    border-radius: 50px;
    position: relative;

    transition: background 0.2s;
    cursor: pointer;
  }

  .ball {
    width: 12px;
    height: 11px;
    background-color: ${(p) => p.theme.colors.primary};
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 50%;

    transition: transform 0.2s, background 0.2s;
  }
}
`;
