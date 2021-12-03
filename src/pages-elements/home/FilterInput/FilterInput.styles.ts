import styled from 'styled-components';

export const FilterInputContainer = styled.div`
  margin-top: -40px;
  height: 80px;
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 8px;
  padding: 1rem 1.2rem;

  display: grid;
  grid-template-columns: 60% 10% 15%;
  grid-template-rows: 1fr;
  justify-content: space-between;
  column-gap: 4px;

  .filter-icon {
    justify-self: center;
    align-self: center;
  }

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const FilterInput = styled.input`
  font-size: 1.1rem;
  font-family: ${(p) => p.theme.fonts.default};
  border: none;
  outline: none;
  color: ${(p) => p.theme.colors.darkGray};
`;

export const FilterButton = styled.button`
  background-color: ${(p) => p.theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.92);
  }
`;
