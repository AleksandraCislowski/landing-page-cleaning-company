import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import heroJpg from '../assets/hero-background-1920.jpg';

export default function Hero() {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const quoteEmail = 'cislowski.aleksandra@gmail.com';
  const quoteMailto = `mailto:${quoteEmail}?subject=${encodeURIComponent(
    t('hero.quote_mail_subject'),
  )}&body=${encodeURIComponent(t('hero.quote_mail_body'))}`;
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
        height: { xs: 'auto', md: '40vh' },
        minHeight: { xs: 520, sm: 560, md: 0 },
        py: { xs: 5, sm: 6, md: 0 },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src={heroJpg}
        alt='Hero background cleaning company'
        fetchPriority='high'
        loading='eager'
        decoding='async'
        width={1920}
        height={1280}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 50%',
          zIndex: 0,
          position: 'absolute',
          inset: 0,
          filter: 'brightness(0.7)',
        }}
      />
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'rgba(0,0,0,0.45)',
          pointerEvents: 'none',
        }}
      />
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
                textShadow: '0 4px 24px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.85)',
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
                textShadow: '0 3px 16px rgba(0,0,0,0.92), 0 1px 6px rgba(0,0,0,0.85)',
                textAlign: { xs: 'center', md: 'left' },
                opacity: isReady ? 0.9 : 0,
                transform: isReady ? 'translateY(0)' : 'translateY(18px)',
                transition:
                  'opacity 540ms ease 120ms, transform 540ms ease 120ms',
              }}
            >
              {t('hero.subtitle')}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                mb: 3,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                color: 'rgba(255, 255, 255, 0.98)',
                textShadow: '0 2px 10px rgba(0,0,0,0.92), 0 1px 6px rgba(0,0,0,0.85)',
                textAlign: { xs: 'center', md: 'left' },
                opacity: isReady ? 0.95 : 0,
                transform: isReady ? 'translateY(0)' : 'translateY(16px)',
                transition:
                  'opacity 560ms ease 180ms, transform 560ms ease 180ms',
              }}
            >
              {t('hero.privacy_line')}
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
                aria-label={`${t('nav.phone')}: +46 (0) 73 333 89 01`}
                variant='outlined'
                sx={{
                  px: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.82rem', sm: '0.875rem' },
                  whiteSpace: 'nowrap',
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
