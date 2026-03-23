import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import hero from '../assets/hero-background.jpg';

export default function Hero() {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const quoteEmail = 'cislowski.aleksandra@gmail.com';
  const quoteMailto = `mailto:${quoteEmail}?subject=${encodeURIComponent('Quote request')}`;
  const handleQuoteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = quoteMailto;
  };
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <Box
      id='home'
      sx={{
        backgroundImage: `url(${hero})`,
        backgroundSize: '108% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        animation: 'heroBgDrift 18s ease-in-out infinite alternate',
        '@keyframes heroBgDrift': {
          '0%': {
            backgroundPosition: 'center 46%',
          },
          '100%': {
            backgroundPosition: 'center 54%',
          },
        },
        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none',
        },
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
                opacity: isReady ? 1 : 0,
                transform: isReady ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 500ms ease, transform 500ms ease',
              }}
            >
              {t('hero.title')}
            </Typography>
            <Typography
              variant='h5'
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', md: '1.5rem' },
                color: 'white',
                textShadow: '0 1px 6px rgba(0,0,0,0.8)',
                textAlign: { xs: 'center', md: 'left' },
                opacity: isReady ? 0.9 : 0,
                transform: isReady ? 'translateY(0)' : 'translateY(18px)',
                transition:
                  'opacity 540ms ease 120ms, transform 540ms ease 120ms',
              }}
            >
              {t('hero.subtitle')}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent='center'
              alignItems='center'
              sx={{
                justifyContent: { xs: 'center', md: 'flex-start' },
                opacity: isReady ? 1 : 0,
                transform: isReady ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 520ms ease 220ms, transform 520ms ease 220ms',
              }}
            >
              <Button
                variant='contained'
                size={isXs ? 'small' : 'medium'}
                onClick={handleQuoteClick}
                sx={{
                  background: 'white',
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  '&:hover': {
                    background: theme.palette.secondary.main,
                    color: 'white',
                  },
                }}
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
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.275)',
                    color: theme.palette.secondary.main,
                  },
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
