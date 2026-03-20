import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';
import ImagePlaceholder from './ImagePlaceholder';

const slides = ['01', '02', '03', '04'];
const AUTOPLAY_INTERVAL_MS = 4500;
const loopedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function GalleryCarousel() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const currentSlide = (activeIndex - 1 + slides.length) % slides.length;

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
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
    if (activeIndex === 0) {
      resetWithoutAnimation(slides.length);
      return;
    }

    if (activeIndex === slides.length + 1) {
      resetWithoutAnimation(1);
    }
  };

  useEffect(() => {
    const autoplayTimer = window.setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(autoplayTimer);
  }, []);

  return (
    <Box
      id='gallery'
      sx={{
        py: { xs: 6, md: 10 },
        background:
          'linear-gradient(180deg, rgba(45, 0, 84, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <Container maxWidth='lg'>
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
            <Typography variant='body1' sx={{ color: '#666' }}>
              {t('gallery.subtitle')}
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
            borderRadius: 6,
            border: '1px solid rgba(45, 0, 84, 0.1)',
            backgroundColor: '#fff',
            boxShadow: '0 14px 34px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: `${loopedSlides.length * 100}%`,
              transform: `translateX(-${activeIndex * (100 / loopedSlides.length)}%)`,
              transition: isTransitioning ? 'transform 0.45s ease' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedSlides.map((slideNumber, index) => (
              <Box
                key={`${slideNumber}-${index}`}
                sx={{ width: `${100 / loopedSlides.length}%`, p: 2 }}
              >
                <ImagePlaceholder height={420} borderRadius={20}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'linear-gradient(135deg, rgba(45, 0, 84, 0.14), rgba(237, 0, 197, 0.15))',
                    }}
                  >
                    <Typography
                      variant='h4'
                      sx={{
                        color: '#2d0054',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {t('gallery.placeholder')} {slideNumber}
                    </Typography>
                  </Box>
                </ImagePlaceholder>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', gap: 1.25, mt: 2.5 }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: index === currentSlide ? 28 : 10,
                height: 10,
                borderRadius: 999,
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
