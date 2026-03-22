import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);
  return null;
}
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GalleryCarousel from './components/GalleryCarousel';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage.tsx';
import ResidentialGuidePage from './pages/ResidentialGuidePage.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d0054',
    },
    secondary: {
      main: '#ed00c5',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 'bold',
      color: '#2d0054',
    },
    h5: {
      fontWeight: 'bold',
      color: '#2d0054',
    },
    subtitle1: {
      fontWeight: 'bold',
      color: '#2d0054',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&:hover': {
            color: '#ffffff',
            backgroundColor: '#ed00c5',
          },
        },
      },
    },
  },
});

function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <GalleryCarousel />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/residential-guide' element={<ResidentialGuidePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
