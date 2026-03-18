import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';

export default function Header() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              src={logo}
              alt='Logo'
              sx={{
                height: '40px',
                marginRight: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                imageRendering: 'crisp-edges',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                },
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.05)' },
                  '100%': { transform: 'scale(1)' },
                },
                animation: 'pulse 2s ease-in-out 3',
              }}
            />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
              Aleksandra Cislowski Städfirma
            </Typography>
          </Box>
          <Stack
            direction='row'
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
          >
            <Button color='inherit' onClick={() => scrollToSection('home')}>
              {t('nav.home')}
            </Button>
            <Button color='inherit' onClick={() => scrollToSection('services')}>
              {t('nav.services')}
            </Button>
            <Button color='inherit' onClick={() => scrollToSection('about')}>
              {t('nav.about')}
            </Button>
            <Button color='inherit' onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </Button>
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
