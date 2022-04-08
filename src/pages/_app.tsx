import { Header } from 'components';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

/**
 * @component App - Next.js root component
 */
export default function App({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Configuração padrão do Styled Components para utilizar com Next.js */}
      <ThemeProvider theme={theme[currentTheme] as DefaultTheme}>
        <GlobalStyles />

        <Header handleThemeChange={handleThemeChange} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
