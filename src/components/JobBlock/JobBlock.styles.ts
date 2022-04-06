import styled from 'styled-components';
import { Animations } from 'styles';

export const JobBlockContainer = styled.article`
  width: 100%;
  min-height: 17rem;
  background-color: ${(p) => p.theme.colors.white};
  padding: 2.5rem 2rem;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.boxShadow};
  animation: ${Animations.fadeFromLeft} 0.75s ease;
  position: relative;
`;

type CompanyLogoParams = {
  backgroundColor: string;
};

export const CompanyLogo = styled.div<CompanyLogoParams>`
  background-color: ${(p) => p.backgroundColor};
  width: 4.4rem;
  height: 4.4rem;
  padding: 1rem;
  border-radius: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -2rem;
`;

export const JobContent = styled.div`
  padding: 1.2rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .position {
    color: ${(p) => p.theme.colors.secondary};
    font-weight: 900;
    font-size: 1.3rem;
    text-decoration: none;
  }

  .secondary {
    color: ${(p) => p.theme.colors.darkGray};
    font-size: 1.1rem;
  }

  .location {
    font-weight: 700;
    color: ${(p) => p.theme.colors.primary};
  }
`;
