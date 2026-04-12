import { Box, Container, Typography, Chip, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import pic1 from '../assets/photo gallery/pic1.jpg';
import pic2 from '../assets/photo gallery/pic2.jpg';
import pic3 from '../assets/photo gallery/pic3.jpg';
import pic4 from '../assets/photo gallery/pic4.jpg';
import pic5 from '../assets/photo gallery/pic5.jpg';
import pic6 from '../assets/photo gallery/pic6.jpg';
import pic7 from '../assets/photo gallery/pic7.jpg';
import pic8 from '../assets/photo gallery/pic8.jpg';
import pic9 from '../assets/photo gallery/pic9.jpg';
import pic10 from '../assets/photo gallery/pic10.jpg';
import pic11 from '../assets/photo gallery/pic11.jpg';
import pic12 from '../assets/photo gallery/pic12.jpg';
import pic13 from '../assets/photo gallery/pic13.jpg';
import pic14 from '../assets/photo gallery/pic14.jpg';
import pic15 from '../assets/photo gallery/pic15.jpg';
import pic16 from '../assets/photo gallery/pic16.jpg';
import pic17 from '../assets/photo gallery/pic17.jpg';
import pic18 from '../assets/photo gallery/pic18.jpg';
import pic19 from '../assets/photo gallery/pic19.jpg';
import pic20 from '../assets/photo gallery/pic20.jpg';
import pic21 from '../assets/photo gallery/pic21.jpg';
import pic22 from '../assets/photo gallery/pic22.jpg';
import pic23 from '../assets/photo gallery/pic23.jpg';
import pic24 from '../assets/photo gallery/pic24.jpg';
import { handleExternalLinkClick } from '../utils/externalLinkConfirm';

const galleryImages = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
  pic23,
  pic24,
];
const TOTAL_PAIRS = Math.floor(galleryImages.length / 2);
const PAIR_SUBTITLE_KEYS = [
  'photoGallery.pairs.1',
  'photoGallery.pairs.2',
  'photoGallery.pairs.3',
  'photoGallery.pairs.4',
  'photoGallery.pairs.5',
  'photoGallery.pairs.6',
  'photoGallery.pairs.7',
  'photoGallery.pairs.8',
  'photoGallery.pairs.9',
  'photoGallery.pairs.10',
  'photoGallery.pairs.11',
  'photoGallery.pairs.12',
];

export default function GalleryPage() {
  const { t } = useTranslation();
  const pairRefs = useRef<Array<HTMLDivElement | null>>([]);
  const facebookUrl =
    'https://www.facebook.com/profile.php?id=100049051159295';
  const [visiblePairs, setVisiblePairs] = useState<boolean[]>(() =>
    Array.from({ length: TOTAL_PAIRS }, () => false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const pairIndex = Number(
            (entry.target as HTMLElement).dataset.pairIndex || -1,
          );

          if (Number.isNaN(pairIndex) || pairIndex < 0) {
            return;
          }

          setVisiblePairs((previous) => {
            if (previous[pairIndex]) {
              return previous;
            }

            const next = [...previous];
            next[pairIndex] = true;
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    pairRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          py: { xs: 4, md: 8 },
          color: 'white',
          textAlign: 'center',
          opacity: 0.85,
        }}
      >
        <Container maxWidth='md'>
          <Typography variant='h2' sx={{ fontWeight: 'bold', color: 'white' }}>
            {t('photoGallery.title')}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              mb: 3,
              color: 'rgba(255,255,255,0.8)',
              fontStyle: 'italic',
            }}
          >
            {t('photoGallery.permission_note')}
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
          <Typography
            variant='body2'
            sx={{
              mt: 2.5,
              color: 'rgba(255,255,255,0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.8,
            }}
          >
            ↔ {t('photoGallery.hint')}
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
              <Box
                key={i}
                ref={(element) => {
                  pairRefs.current[i] = element as HTMLDivElement | null;
                }}
                data-pair-index={i}
                sx={{
                  opacity: visiblePairs[i] ? 1 : 0,
                  transform: visiblePairs[i]
                    ? 'translateY(0) scale(1)'
                    : 'translateY(20px) scale(0.985)',
                  transition:
                    'opacity 460ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: `${Math.min(i * 45, 220)}ms`,
                }}
              >
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
                        {t(PAIR_SUBTITLE_KEYS[i])}
                      </Typography>
                      <Tooltip
                        title={t('photoGallery.drag_tooltip')}
                        arrow
                        placement='top'
                        enterDelay={220}
                      >
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
                      </Tooltip>
                    </>
                  );
                })()}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 6, md: 8 },
          px: 2,
          backgroundColor: '#fafafa',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: 700,
            mb: 1,
          }}
        >
          {t('photoGallery.facebookCta')}
        </Typography>
        {(() => {
          const fullText = t('photoGallery.facebookCtaLink');
          const marker = 'Facebook';
          const markerIndex = fullText.indexOf(marker);

          if (markerIndex === -1) {
            return (
              <Typography variant='body1' sx={{ color: '#888', mb: 3 }}>
                {fullText}
              </Typography>
            );
          }

          const before = fullText.slice(0, markerIndex);
          const after = fullText.slice(markerIndex + marker.length);

          return (
            <Typography variant='body1' sx={{ color: '#888', mb: 3 }}>
              {before}
              <Box
                component='a'
                href={facebookUrl}
                target='_blank'
                rel='noopener noreferrer'
                onClick={(event) =>
                  handleExternalLinkClick(event, t('common.leave_site_confirm'))
                }
                aria-label='Facebook'
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                  '&:hover': {
                    color: (theme) => theme.palette.secondary.main,
                  },
                }}
              >
                {marker}
              </Box>
              {after}
            </Typography>
          );
        })()}
      </Box>

      <Footer />
    </Box>
  );
}
