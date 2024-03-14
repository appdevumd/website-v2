import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import AppThemeController from './middleware/AppThemeController'
import WebLandingPage from './integrals/WebLandingPage'

function App() {
  return (
    <ThemeProvider theme={AppThemeController.baseTheme}>
      <CssBaseline />
      <WebLandingPage />
    </ThemeProvider>
  )
}

export default App
