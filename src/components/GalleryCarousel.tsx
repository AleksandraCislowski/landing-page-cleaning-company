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
import picture1 from '../assets/pic1.jpg';
import picture2 from '../assets/pic2.jpg';
import picture3 from '../assets/pic3.jpg';
import picture4 from '../assets/pic4.jpg';
import picture5 from '../assets/pic5.jpg';
import picture6 from '../assets/pic6.jpg';
import picture7 from '../assets/pic7.jpg';
import picture8 from '../assets/pic8.jpg';
import picture9 from '../assets/pic9.jpg';
import picture10 from '../assets/pic10.jpg';
import picture11 from '../assets/pic11.jpg';
import picture12 from '../assets/pic12.jpg';
import picture13 from '../assets/pic13.jpg';
import picture14 from '../assets/pic14.jpg';
import picture15 from '../assets/pic15.jpg';
import picture16 from '../assets/pic16.jpg';

type Slide = { src?: string; key: string; label: string };

const slides: Slide[] = [
  { src: picture1, key: 'fresh-home', label: '01' },
  { src: picture2, key: 'kitchen-detail', label: '02' },
  { src: picture3, key: 'bathroom-shine', label: '03' },
  { src: picture4, key: 'weekly-care', label: '04' },
  { src: picture5, key: 'move-out-finish', label: '05' },
  { src: picture6, key: 'office-clean', label: '06' },
  { src: picture7, key: 'window-sparkle', label: '07' },
  { src: picture8, key: 'floor-polish', label: '08' },
  { src: picture9, key: 'carpet-refresh', label: '09' },
  { src: picture10, key: 'post-renovation', label: '10' },
  { src: picture11, key: 'deep-clean', label: '11' },
  { src: picture12, key: 'eco-friendly', label: '12' },
  { src: picture13, key: 'team-effort', label: '13' },
  { src: picture14, key: 'before-after', label: '14' },
  { src: picture15, key: 'satisfaction', label: '15' },
  { src: picture16, key: 'sparkling-results', label: '16' },
];
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
            {loopedSlides.map((slide, index) => (
              <Box
                key={`${slide.label}-${index}`}
                sx={{ width: `${100 / loopedSlides.length}%`, p: 2 }}
              >
                <ImagePlaceholder
                  height={600}
                  borderRadius={15}
                  src={slide.src}
                  alt={
                    slide.src ? t(`gallery.items.${slide.key}.alt`) : undefined
                  }
                >
                  {!slide.src && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
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
                        {t('gallery.placeholder')} {slide.label}
                      </Typography>
                    </Box>
                  )}

                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      background:
                        'linear-gradient(180deg, rgba(13, 19, 33, 0) 30%, rgba(13, 19, 33, 0.76) 100%)',
                      p: { xs: 2.5, md: 3.5 },
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: 360,
                        color: '#fff',
                      }}
                    >
                      <Typography
                        variant='overline'
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 1.25,
                          py: 0.5,
                          mb: 1,
                          borderRadius: 999,
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          backgroundColor: 'rgba(255, 255, 255, 0.16)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        {slide.label}
                      </Typography>
                      <Typography
                        variant='h4'
                        sx={{
                          fontWeight: 700,
                          lineHeight: 1.1,
                          fontSize: { xs: '1.6rem', md: '2.15rem' },
                        }}
                      >
                        {t(`gallery.items.${slide.key}.title`)}
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          mt: 1,
                          color: 'rgba(255, 255, 255, 0.86)',
                          maxWidth: 320,
                        }}
                      >
                        {t(`gallery.items.${slide.key}.description`)}
                      </Typography>
                    </Box>
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
