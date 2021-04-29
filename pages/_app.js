
import '../styles/globals.css'

// Styled Components
import { createGlobalStyle, ThemeProvider } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fffefe;
  }
`;
const theme = {
  colors: {
    primary: '#0070f3',
  },
}


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
