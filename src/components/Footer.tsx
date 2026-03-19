import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
        py: 4,
      }}
    >
      <Container maxWidth='lg'>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <img
                src={logo}
                alt='Logo'
                style={{ height: '40px', marginRight: '10px' }}
              />
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Aleksandra Cislowski Städfirma
              </Typography>
            </Box>
            <Typography variant='body2' sx={{ opacity: 0.7 }}>
              © {currentYear} Aleksandra Cislowski. {t('footer.rights')}
            </Typography>
          </Box>

          <Stack direction='row' spacing={1}>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': { background: 'rgba(255,255,255,0.1)' },
              }}
            >
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
