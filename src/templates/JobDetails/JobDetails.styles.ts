import styled, { css } from 'styled-components';
import { Animations } from 'styles';

export const Wrapper = styled.div`
  margin: 0 auto;

  @media (min-width: ${(p) => p.theme.mediaQueries.small}) {
    width: 80%;
  }

  @media (min-width: ${(p) => p.theme.mediaQueries.medium}) {
    width: 70%;
  }

  @media (min-width: ${(p) => p.theme.mediaQueries.large}) {
    width: 60%;
  }
`;

export const JobDetailsHeader = styled.header`
  background-color: ${(p) => p.theme.colors.white};
  padding: 2rem;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.boxShadow};
  animation: ${Animations.fadeFromLeft} 0.75s ease;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
`;

type CompanyLogoParams = {
  backgroundColor: string;
};

export const CompanyLogo = styled.div<CompanyLogoParams>`
  background-color: ${(p) => p.backgroundColor};
  width: 3.8rem;
  height: 3.8rem;
  padding: 1rem;
  border-radius: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -2rem;
`;

export const JobDetailsHeaderContent = styled.header`
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;

  .company {
    color: ${(p) => p.theme.colors.secondary};
    font-weight: 700;
    font-size: 1.4rem;
    text-decoration: none;
  }

  .website {
    color: ${(p) => p.theme.colors.darkGray};
    font-size: 1.2rem;
  }

  .website-button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    background-color: rgba(89, 100, 224, 0.1);
    font-weight: 700;
    color: ${(p) => p.theme.colors.primary};

    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(89, 100, 224, 0.2);
    }
  }
`;

export const JobDetailsContent = styled.section`
  background-color: ${(p) => p.theme.colors.white};
  padding: 2.5rem 1.5rem;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.boxShadow};
  animation: ${Animations.fadeFromLeft} 0.75s ease;
`;

export const JobDetailsContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  .position {
    color: ${(p) => p.theme.colors.secondary};
    font-weight: 900;
    font-size: 1.35rem;
  }

  .secondary {
    color: ${(p) => p.theme.colors.darkGray};
    font-size: 1.05rem;
  }

  .location {
    font-weight: 700;
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6rem;
  font-size: 1.1rem;
  color: ${(p) => p.theme.colors.darkGray};
`;

export const Heading = styled.h3`
  color: ${(p) => p.theme.colors.secondary};
  font-weight: 600;
  font-size: 1.3rem;
`;

export const List = styled.ul`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  li {
    padding-left: 0.5rem;
  }

  li::marker {
    color: ${(p) => p.theme.colors.primary};
    font-weight: bold;
  }
`;

export const ApplyButton = styled.a`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    padding: 1rem;

    color: ${theme.colors.white};
    font-weight: 600;
    font-size: 1.05rem;
    text-decoration: none;

    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius};
    border-radius: 6px;

    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      filter: brightness(0.95);
    }
  `}
`;

export const JobDetailsFooter = styled.footer`
  background: ${(p) => p.theme.colors.white};
  padding: 1.5rem 2.5rem;
  box-shadow: ${(p) => p.theme.boxShadow};
  border-radius: ${(p) => p.theme.borderRadius};
  display: flex;
  justify-content: space-between;

  ${ApplyButton} {
    width: 12rem;
  }

  @media (max-width: ${(p) => p.theme.mediaQueries.medium}) {
    flex-direction: column;
    row-gap: 1rem;

    ${ApplyButton} {
      width: auto;
    }
  }
`;

export const JobDetailsFooterContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${(p) => p.theme.mediaQueries.medium}) {
    align-items: center;
    row-gap: 0.4rem;
  }

  .position {
    color: ${(p) => p.theme.colors.secondary};
    font-weight: 900;
    font-size: 1.2rem;
  }

  .company {
    color: ${(p) => p.theme.colors.darkGray};
    font-size: 1rem;
  }
`;
