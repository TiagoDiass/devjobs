import { Header } from 'components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

/**
 * @component App - Next.js root component
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Configuração padrão do Styled Components para utilizar com Next.js */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
