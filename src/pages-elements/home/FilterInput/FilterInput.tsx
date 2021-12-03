import * as S from './FilterInput.styles';

/**
 * @element FilterInput - Input to filter jobs
 */
export default function FilterInput() {
  return (
    <S.FilterInputContainer>
      <S.FilterInput placeholder='Filter by title...' />

      <img className='filter-icon' src='./images/mobile/icon-filter.svg' alt='Filter icon' />

      <S.FilterButton>
        <img src='./images/desktop/icon-search.svg' alt='Search icon' />
      </S.FilterButton>
    </S.FilterInputContainer>
  );
}
