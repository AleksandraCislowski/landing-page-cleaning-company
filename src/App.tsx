import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import GalleryCarousel from './components/GalleryCarousel';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage.tsx';

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
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
