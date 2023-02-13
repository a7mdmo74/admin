import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from 'theme';
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';
import Doctors from 'scenes/doctors';
import Video from 'scenes/video';
import Guides from 'scenes/guides';
import SubAdmin from 'scenes/subadmin';
import Advertisement from 'scenes/advertisement';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/video" element={<Video />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/subadmin" element={<SubAdmin />} />
              <Route path="/advertisement" element={<Advertisement />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
