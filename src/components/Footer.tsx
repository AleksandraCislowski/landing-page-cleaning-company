import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
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
              © {currentYear} Aleksandra Cislowski. All rights reserved.
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
            <IconButton
              sx={{
                color: 'white',
                '&:hover': { background: 'rgba(255,255,255,0.1)' },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
                '&:hover': { background: 'rgba(255,255,255,0.1)' },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
