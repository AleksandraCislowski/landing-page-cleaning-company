import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id='home'
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth='md'>
        <Typography
          variant='h2'
          sx={{
            mb: 2,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3.5rem' },
          }}
        >
          {t('hero.title')}
        </Typography>
        <Typography
          variant='h5'
          sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.5rem' }, opacity: 0.9 }}
        >
          {t('hero.subtitle')}
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='center'
          sx={{ flexWrap: 'wrap' }}
        >
          <Button
            variant='contained'
            size='large'
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
            variant='outlined'
            size='large'
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': { background: 'rgba(255,255,255,0.1)' },
            }}
          >
            {t('nav.phone')}: +46 (0) XXX-XXXX
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
