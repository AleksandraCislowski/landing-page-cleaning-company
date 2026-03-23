import { Container, Typography, Grid, Box, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImagePlaceholder from './ImagePlaceholder';
import contactphoto from '../assets/contact-1400.jpg';

export default function Contact() {
  const { t } = useTranslation();
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const address = t('contact.gps');
  const phoneDisplay = '+46 (0) 73 333 89 01';
  const phoneHref = 'tel:+46733338901';
  const email = 'cislowski.aleksandra@gmail.com';
  const emailMailto = `mailto:${email}?subject=${encodeURIComponent(
    t('contact.mail_subject'),
  )}&body=${encodeURIComponent(t('contact.mail_body'))}`;
  const phoneAriaLabel = `${t('contact.phone')}: ${phoneDisplay}`;
  const emailAriaLabel = `${t('contact.email')}: ${email}`;
  const mapLinkAriaLabel = `${t('contact.map_open')}: ${address}`;
  const mapQuery = encodeURIComponent(address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <Box id='contact' sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{ textAlign: 'center', mb: 6 }}>
          {t('contact.title')}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                p: 3,
                boxShadow: 'none',
                border: '1px solid #e0e0e0',
                height: '100%',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <ImagePlaceholder
                  src={contactphoto}
                  alt='Hands holding a phone, about to make a call'
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PhoneIcon
                  sx={{
                    mr: 2,
                    color: (theme) => theme.palette.primary.main,
                    fontSize: 28,
                  }}
                />
                <Box>
                  <Typography variant='subtitle2' sx={{ color: '#666' }}>
                    {t('contact.phone')}
                  </Typography>
                  <Typography
                    variant='body1'
                    component='a'
                    href={phoneHref}
                    aria-label={phoneAriaLabel}
                    sx={{
                      fontWeight: 'bold',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'color 180ms ease',
                      '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      },
                    }}
                  >
                    {phoneDisplay}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon
                  sx={{
                    mr: 2,
                    color: (theme) => theme.palette.primary.main,
                    fontSize: 28,
                  }}
                />
                <Box>
                  <Typography variant='subtitle2' sx={{ color: '#666' }}>
                    {t('contact.email')}
                  </Typography>
                  <Typography
                    variant='body1'
                    component='a'
                    href={emailMailto}
                    aria-label={emailAriaLabel}
                    sx={{
                      fontWeight: 'bold',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'color 180ms ease',
                      '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      },
                    }}
                  >
                    {email}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOnIcon
                  sx={{
                    mr: 2,
                    color: (theme) => theme.palette.primary.main,
                    fontSize: 28,
                  }}
                />
                <Box>
                  <Typography variant='subtitle2' sx={{ color: '#666' }}>
                    {t('contact.address')}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ fontWeight: 'bold', color: '#333' }}
                  >
                    {t('contact.gps')}
                  </Typography>
                </Box>
              </Box>

              <Typography variant='subtitle2' sx={{ color: '#666', mt: 4 }}>
                {t('contact.hours')}
              </Typography>
              <Typography variant='body2' sx={{ color: '#333' }}>
                {t('contact.opening_hours.weekdays')}
              </Typography>
              <Typography variant='body2' sx={{ color: '#333' }}>
                {t('contact.opening_hours.weekend')}
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card
              sx={{
                p: 3,
                boxShadow: 'none',
                border: '1px solid #e0e0e0',
                height: '100%',
              }}
            >
              <Typography variant='h5' sx={{ mb: 2 }}>
                {t('contact.map_title')}
              </Typography>
              <Typography variant='body1' sx={{ color: '#333', mb: 2 }}>
                {address}
              </Typography>

              <Box
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid #e0e0e0',
                }}
              >
                <Box
                  component='iframe'
                  title='Google Maps location'
                  src={mapEmbedUrl}
                  loading='lazy'
                  onLoad={() => setIsMapLoaded(true)}
                  referrerPolicy='no-referrer-when-downgrade'
                  sx={{
                    width: '100%',
                    minHeight: { xs: 300, md: 420 },
                    border: 0,
                    display: 'block',
                    opacity: isMapLoaded ? 1 : 0,
                    transition: 'opacity 420ms ease',
                  }}
                  allowFullScreen
                />
              </Box>

              <Box
                component='a'
                href={mapOpenUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={mapLinkAriaLabel}
                sx={{
                  mt: 2,
                  display: 'inline-block',
                  color: '#23408e',
                  fontWeight: 700,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                  '&:focus-visible': {
                    outline: '2px solid #23408e',
                    outlineOffset: 3,
                    borderRadius: 4,
                  },
                }}
              >
                {t('contact.map_open')}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
