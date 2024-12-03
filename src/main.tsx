import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from '@mui/material'
import AppThemeController from './middleware/AppThemeController'
import WebLandingPage from './integrals/WebLandingPage'
import { HashRouter, Route, Routes } from 'react-router-dom'
import WebProjectsPage from './integrals/WebProjectsPage'
import WebTierPage from './integrals/WebTierPage'
import 'atropos/css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WebSponsorTiers from "./integrals/WebSponsorTiers.tsx";
import DonateLandingPage from "./integrals/DonateLandingPage.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={AppThemeController.baseTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/donate" element={<DonateLandingPage />} />
          <Route path="/" element={<WebLandingPage />} />
          <Route path="/" element={<App />}>
            <Route path="/project/:projectId" element={<WebProjectsPage />} />
            <Route path="tier/:tier" element={<WebTierPage />} />
            <Route path="/sponsor-us" element={<WebSponsorTiers />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  </HashRouter>
);
