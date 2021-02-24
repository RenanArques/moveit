import { ThemeProvider } from 'styled-components'

import { ChallengesProvider } from '../contexts/ChallengesContext'

import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  const lightTheme = {
    white: '#fff',
    background: '#F2F3F5',
    grayLine: '#DCDDE0',
    text: '#666666',
    textHighlight: '#B3B9FF',
    title: '#2E384D',
    red: '#E83F5B',
    green: '#4CD62B',
    blue: '#5965E0',
    blueDark: '#4953B8',
    blueTwitter: '#2aa9E0'
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <ChallengesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default MyApp
