import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { handleExternalLinkClick } from '../utils/externalLinkConfirm';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const location = useLocation();

  const handleResidentialGuideClick = (event: React.MouseEvent) => {
    if (location.pathname === '/residential-guide') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
                width={43}
                height={40}
                loading='lazy'
                decoding='async'
                style={{ height: '40px', marginRight: '10px' }}
              />
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                Aleksandra Städfirma
              </Typography>
            </Box>
            <Typography variant='body2' sx={{ opacity: 0.7 }}>
              © {currentYear} Aleksandra Städfirma. {t('footer.rights')}
            </Typography>
            <Typography
              component={RouterLink}
              to='/residential-guide'
              onClick={handleResidentialGuideClick}
              variant='body2'
              sx={{
                mt: 0.6,
                color: 'white',
                opacity: 0.85,
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
                '&:hover': { opacity: 1 },
              }}
            >
              {t('footer.residential_guide')}
            </Typography>
          </Box>

          <Stack direction='row' spacing={1}>
            <IconButton
              component='a'
              href='https://www.facebook.com/profile.php?id=100049051159295'
              target='_blank'
              rel='noopener noreferrer'
              onClick={(event) =>
                handleExternalLinkClick(event, t('common.leave_site_confirm'))
              }
              aria-label='Facebook'
              sx={{
                color: 'white',
                '&:hover': { background: 'rgba(255,255,255,0.1)' },
              }}
            >
              <FacebookIcon fontSize='large' />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
