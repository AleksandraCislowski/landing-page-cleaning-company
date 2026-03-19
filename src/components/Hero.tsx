import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme, useMediaQuery } from '@mui/material';
import hero from '../assets/hero-background.jpg';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id='home'
      sx={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={8}>
            <Typography
              variant='h2'
              sx={{
                mb: 2,
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: 'white',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {t('hero.title')}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', md: '1.5rem' },
                opacity: 0.9,
                color: 'white',
                textShadow: '0 1px 6px rgba(0,0,0,0.8)',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {t('hero.subtitle')}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent='center'
              alignItems='center'
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <Button
                variant='contained'
                size={isXs ? 'small' : 'medium'}
                sx={{
                  background: 'white',
                  color: '#667eea',
                  fontWeight: 'bold',
                  '&:hover': { background: '#f0f0f0' },
                }}
                onClick={scrollToContact}
              >
                {t('hero.cta')}
              </Button>
              <Button
                size={isXs ? 'small' : 'medium'}
                component='a'
                href='tel:+46733338901'
                variant='outlined'
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { background: 'rgba(255,255,255,0.1)' },
                  textDecoration: 'none',
                }}
              >
                {t('nav.phone')}: +46 (0) 73 333 89 01
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
