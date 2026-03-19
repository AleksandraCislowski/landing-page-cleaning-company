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
import Logo from './Logo';

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
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Logo onClick={() => scrollToSection('home')} />
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 'bold',
                display: { xs: 'none', sm: 'none', md: 'block' },
              }}
            >
              Aleksandra Cislowski Städfirma
            </Typography>
          </Box>

          <Stack
            direction='row'
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
          >
            <Button onClick={() => scrollToSection('home')}>
              {t('nav.home')}
            </Button>
            <Button onClick={() => scrollToSection('services')}>
              {t('nav.services')}
            </Button>
            <Button onClick={() => scrollToSection('about')}>
              {t('nav.about')}
            </Button>
            <Button onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </Button>
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
