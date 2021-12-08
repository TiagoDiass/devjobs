import * as S from './Header.styles';
import Link from 'next/link';

/**
 * @component Header - Website header
 */
export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Link href='/'>
          <S.Logo>devjobs</S.Logo>
        </Link>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
