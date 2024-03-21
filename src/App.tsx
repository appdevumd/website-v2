import { CssBaseline, ThemeProvider } from '@mui/material'
import AppThemeController from './middleware/AppThemeController'
import WebLandingPage from './integrals/WebLandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebProjectsPage from './integrals/WebProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={AppThemeController.baseTheme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<WebLandingPage />} />
          <Route path='/project/:projectId' element={<WebProjectsPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
