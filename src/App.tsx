import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
