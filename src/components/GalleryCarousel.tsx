import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';
import carouselpic1 from '../assets/carousel photos/carousel1.jpg';
import carouselpic2 from '../assets/carousel photos/carousel2.jpg';
import carouselpic3 from '../assets/carousel photos/carousel3.jpg';
import carouselpic4 from '../assets/carousel photos/carousel4.jpg';
import carouselpic5 from '../assets/carousel photos/carousel5.jpg';
import carouselpic6 from '../assets/carousel photos/carousel6.jpg';
import carouselpic7 from '../assets/carousel photos/carousel7.jpg';
import carouselpic8 from '../assets/carousel photos/carousel8.jpg';
import carouselpic9 from '../assets/carousel photos/carousel9.jpg';
import carouselpic10 from '../assets/carousel photos/carousel10.jpg';
import carouselpic11 from '../assets/carousel photos/carousel11.jpg';
import carouselpic12 from '../assets/carousel photos/carousel12.jpg';
import carouselpic13 from '../assets/carousel photos/carousel13.jpg';
import carouselpic14 from '../assets/carousel photos/carousel14.jpg';

type Slide = {
  src: string;
  key: string;
  label: string;
};

const slides: Slide[] = [
  { src: carouselpic1, key: 'fresh-home', label: '01' },
  { src: carouselpic2, key: 'kitchen-detail', label: '02' },
  { src: carouselpic3, key: 'bathroom-shine', label: '03' },
  { src: carouselpic4, key: 'weekly-care', label: '04' },
  { src: carouselpic5, key: 'move-out-finish', label: '05' },
  { src: carouselpic6, key: 'office-clean', label: '06' },
  { src: carouselpic7, key: 'window-sparkle', label: '07' },
  { src: carouselpic8, key: 'floor-polish', label: '08' },
  { src: carouselpic9, key: 'deep-clean', label: '09' },
  { src: carouselpic10, key: 'post-construction', label: '10' },
  { src: carouselpic11, key: 'carpet-care', label: '11' },
  { src: carouselpic12, key: 'exterior-shine', label: '12' },
  { src: carouselpic13, key: 'green-clean', label: '13' },
  { src: carouselpic14, key: 'custom-solution', label: '14' },
];

const AUTOPLAY_INTERVAL_MS = 10000;
const loopedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function GalleryCarousel() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const currentSlide = (activeIndex - 1 + slides.length) % slides.length;

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => Math.min(prev + 1, slides.length + 2));
    setAutoplayKey((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => Math.max(prev - 1, -1));
    setAutoplayKey((prev) => prev + 1);
  };

  const resetWithoutAnimation = (targetIndex: number) => {
    setIsTransitioning(false);
    setActiveIndex(targetIndex);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
  };

  const handleTransitionEnd = () => {
    if (activeIndex <= 0) {
      resetWithoutAnimation(slides.length);
      return;
    }

    if (activeIndex >= slides.length + 1) {
      resetWithoutAnimation(1);
    }
  };

  useEffect(() => {
    const autoplayTimer = window.setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => Math.min(prev + 1, slides.length + 2));
      setAutoplayKey((prev) => prev + 1);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(autoplayTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayKey]);

  return (
    <Box
      id='gallery'
      sx={{
        py: { xs: 6, md: 10 },
        background:
          'linear-gradient(180deg, rgba(45, 0, 84, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <Container maxWidth='md'>
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            <Typography variant='h3' sx={{ mb: 1 }}>
              {t('gallery.title')}
            </Typography>
            <Typography variant='body1' sx={{ color: '#666', maxWidth: 700 }}>
              {t('gallery.subtitle')}{' '}
              <Box
                component={Link}
                to='/gallery'
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: 'none',
                  '&:hover': {
                    color: (theme) => theme.palette.secondary.main,
                    textDecoration: 'underline',
                  },
                }}
              >
                {t('gallery.here')}
              </Box>
            </Typography>
            <Typography
              variant='body2'
              sx={{
                mt: 1,
                color: 'rgba(45, 0, 84, 0.72)',
                fontStyle: 'italic',
              }}
            >
              {t('gallery.permission_note')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              aria-label={t('gallery.previous')}
              onClick={handlePrevious}
              sx={{
                border: '1px solid rgba(45, 0, 84, 0.15)',
                color: theme.palette.primary.main,
              }}
            >
              <ArrowBackIosNewIcon fontSize='small' />
            </IconButton>
            <IconButton
              aria-label={t('gallery.next')}
              onClick={handleNext}
              sx={{
                border: '1px solid rgba(45, 0, 84, 0.15)',
                color: theme.palette.primary.main,
              }}
            >
              <ArrowForwardIosIcon fontSize='small' />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            overflow: 'hidden',
            borderRadius: 0,
            border: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Box
            sx={{
              height: 3,
              width: '100%',
              mb: 1.5,
              borderRadius: 999,
              overflow: 'hidden',
              backgroundColor: 'rgba(45, 0, 84, 0.12)',
            }}
          >
            <Box
              key={autoplayKey}
              sx={{
                height: '100%',
                width: '100%',
                transformOrigin: 'left center',
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                animation: `${AUTOPLAY_INTERVAL_MS}ms linear 0ms 1 normal none running slideProgress`,
                '@keyframes slideProgress': {
                  '0%': {
                    transform: 'scaleX(0)',
                  },
                  '100%': {
                    transform: 'scaleX(1)',
                  },
                },
                '@media (prefers-reduced-motion: reduce)': {
                  animation: 'none',
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              width: `${loopedSlides.length * 100}%`,
              transform: `translateX(-${activeIndex * (100 / loopedSlides.length)}%)`,
              transition: isTransitioning ? 'transform 1s ease' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedSlides.map((slide, index) => {
              const isActiveSlide = index === activeIndex;

              return (
                <Box
                  key={`${slide.label}-${index}`}
                  sx={{
                    width: `${100 / loopedSlides.length}%`,
                    p: 0,
                    display: 'flex',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: '90%', sm: '80%', md: '70%' },
                      mx: 'auto',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      borderRadius: { xs: 3, md: 2 },
                      isolation: 'isolate',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        opacity: 0.7,
                        zIndex: 0,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        zIndex: 1,
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        p: { xs: 1, sm: 1.25, md: 1.5 },
                        pb: { xs: 1.5, md: 2 },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          aspectRatio: '1 / 1',
                          overflow: 'hidden',
                          borderRadius: { xs: 2.5, sm: 3, md: 3.5 },
                          mb: { xs: 1.25, md: 1.5 },
                        }}
                      >
                        <Box
                          component='img'
                          src={slide.src}
                          alt={t(`gallery.items.${slide.key}.alt`)}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center bottom',
                            display: 'block',
                            transform: isActiveSlide
                              ? 'scale(1.04)'
                              : 'scale(1)',
                            transition: `transform ${AUTOPLAY_INTERVAL_MS}ms linear`,
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          color: '#fff',
                          flexGrow: 1,
                          px: { xs: 0.25, md: 0.5 },
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        <Typography
                          variant='h4'
                          sx={{
                            fontWeight: 700,
                            lineHeight: 1.1,
                            fontSize: { xs: '1.25rem', md: '1.8rem' },
                            mb: 0.75,
                          }}
                        >
                          {t(`gallery.items.${slide.key}.title`)}
                        </Typography>
                        <Typography
                          variant='body2'
                          sx={{
                            color: 'rgba(255, 255, 255, 0.92)',
                          }}
                        >
                          {t(`gallery.items.${slide.key}.description`)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', gap: 1.25, mt: 2.5 }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              component='button'
              type='button'
              onClick={() => {
                setIsTransitioning(true);
                setActiveIndex(index + 1);
                setAutoplayKey((prev) => prev + 1);
              }}
              aria-label={`${t('gallery.title')} ${index + 1}`}
              sx={{
                width: index === currentSlide ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: 'none',
                p: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor:
                  index === currentSlide
                    ? theme.palette.primary.main
                    : 'rgba(45, 0, 84, 0.25)',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
