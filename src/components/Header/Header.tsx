import * as S from './Header.styles';

/**
 * @component Header - Website header
 */
export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>devjobs</S.Logo>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
