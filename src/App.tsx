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
      main: '#3f0252',
    },
    secondary: {
      main: '#d234cd',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
