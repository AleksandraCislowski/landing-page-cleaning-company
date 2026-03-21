import { Box, Container, Typography, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import pic1 from '../assets/photo gallery/pic1.jpg';
import pic2 from '../assets/photo gallery/pic2.jpg';
import pic3 from '../assets/photo gallery/pic3.jpg';
import pic4 from '../assets/photo gallery/pic4.jpg';

const galleryImages = [pic1, pic2, pic3, pic4];
const TOTAL_PAIRS = Math.floor(galleryImages.length / 2);

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <Box>
      <Header />

      {/* Hero section */}
      <Box
        sx={{
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          py: { xs: 8, md: 12 },
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Typography
            variant='h2'
            sx={{ fontWeight: 'bold', mb: 2.5, color: 'white' }}
          >
            {t('photoGallery.title')}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'rgba(255,255,255,0.88)',
              maxWidth: 660,
              mx: 'auto',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            {t('photoGallery.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Before / After grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fafafa' }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 5 },
            }}
          >
            {Array.from({ length: TOTAL_PAIRS }, (_, i) => (
              <Box key={i}>
                {(() => {
                  const beforeIndex = i * 2;
                  const afterIndex = beforeIndex + 1;
                  const beforeImage = galleryImages[beforeIndex];
                  const afterImage = galleryImages[afterIndex];

                  return (
                    <>
                      <Typography
                        variant='overline'
                        sx={{
                          color: '#aaa',
                          fontSize: '0.72rem',
                          letterSpacing: 1.5,
                          mb: 1.5,
                          display: 'block',
                        }}
                      >
                        {t('photoGallery.set')} {i + 1}
                      </Typography>
                      <Box
                        sx={{
                          position: 'relative',
                          borderRadius: 3,
                          overflow: 'hidden',
                          boxShadow: '0 4px 16px rgba(45,0,84,0.14)',
                          backgroundColor: '#f1edf7',
                          '& .before-after-slider': {
                            width: '100%',
                            maxWidth: '100%',
                            aspectRatio: { xs: '4 / 3', md: '1 / 1' },
                            margin: '0 auto',
                          },
                          '& .before-after-slider__first-photo-container, & .before-after-slider__second-photo-container':
                            {
                              height: '100%',
                            },
                          '& .before-after-slider img': {
                            height: '100%',
                            width: '100%',
                            objectFit: 'contain',
                            backgroundColor: '#f1edf7',
                          },
                        }}
                      >
                        <Chip
                          label={t('photoGallery.before')}
                          size='small'
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            zIndex: 2,
                            bgcolor: (theme) => theme.palette.primary.main,
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.72rem',
                            letterSpacing: 0.5,
                          }}
                        />
                        <Chip
                          label={t('photoGallery.after')}
                          size='small'
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            zIndex: 2,
                            bgcolor: (theme) => theme.palette.secondary.main,
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.72rem',
                            letterSpacing: 0.5,
                          }}
                        />
                        <ReactBeforeSliderComponent
                          firstImage={{
                            imageUrl: beforeImage,
                          }}
                          secondImage={{
                            imageUrl: afterImage,
                          }}
                        />
                      </Box>
                    </>
                  );
                })()}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
