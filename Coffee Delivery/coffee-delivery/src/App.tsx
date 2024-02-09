import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

import { AppContextProvider } from './contexts/AppContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
