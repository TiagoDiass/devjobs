import * as S from './Header.styles';
import Link from 'next/link';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

type HeaderProps = {
  handleThemeChange: () => void;
};

/**
 * @component Header - Website header
 */
export default function Header({ handleThemeChange }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Link href='/'>
          <S.Logo>devjobs</S.Logo>
        </Link>

        <S.ThemeSwitcher>
          <BsFillSunFill />

          <input type='checkbox' id='checkbox' className='checkbox' />
          <label htmlFor='checkbox' className='label' onClick={handleThemeChange}>
            <div className='ball'></div>
          </label>

          <BsFillMoonFill />
        </S.ThemeSwitcher>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
