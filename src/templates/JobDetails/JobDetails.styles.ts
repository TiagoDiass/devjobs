import styled from 'styled-components';
import { Animations } from 'styles';

export const JobDetailsHeader = styled.header`
  background-color: ${(p) => p.theme.colors.white};
  padding: 2.5rem 2rem;
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

export const JobDetailsHeaderContent = styled.div`
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
