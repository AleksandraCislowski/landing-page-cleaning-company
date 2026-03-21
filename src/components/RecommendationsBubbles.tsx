import { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Fade,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import recbubble1 from '../assets/recommendation bubbles photos/rec1.png';
import recbubble2 from '../assets/recommendation bubbles photos/rec2.png';
import recbubble3 from '../assets/recommendation bubbles photos/rec3.png';
import recbubble4 from '../assets/recommendation bubbles photos/rec4.png';
import recbubble5 from '../assets/recommendation bubbles photos/rec5.png';
import recbubble6 from '../assets/recommendation bubbles photos/rec6.png';
import recbubble7 from '../assets/recommendation bubbles photos/rec7.png';
import recbubble8 from '../assets/recommendation bubbles photos/rec8.png';

type BubbleConfig = {
  id: number;
  size: number;
  top: string;
  left: string;
  focus: string;
  enterX: number;
  enterY: number;
  delay: number;
};

const bubbleConfig: BubbleConfig[] = [
  {
    id: 1,
    size: 150,
    top: '12%',
    left: '24%',
    focus: '15% 25%',
    enterX: -130,
    enterY: -70,
    delay: 0,
  },
  {
    id: 2,
    size: 116,
    top: '15%',
    left: '56%',
    focus: '45% 32%',
    enterX: 120,
    enterY: -85,
    delay: 100,
  },
  {
    id: 3,
    size: 188,
    top: '30%',
    left: '36%',
    focus: '58% 44%',
    enterX: -120,
    enterY: 100,
    delay: 150,
  },
  {
    id: 4,
    size: 128,
    top: '34%',
    left: '62%',
    focus: '28% 56%',
    enterX: 90,
    enterY: 95,
    delay: 220,
  },
  {
    id: 5,
    size: 98,
    top: '60%',
    left: '28%',
    focus: '52% 48%',
    enterX: -110,
    enterY: 120,
    delay: 280,
  },
  {
    id: 6,
    size: 172,
    top: '58%',
    left: '45%',
    focus: '35% 38%',
    enterX: 25,
    enterY: 140,
    delay: 340,
  },
  {
    id: 7,
    size: 108,
    top: '66%',
    left: '61%',
    focus: '69% 40%',
    enterX: 110,
    enterY: 135,
    delay: 380,
  },
  {
    id: 8,
    size: 90,
    top: '23%',
    left: '70%',
    focus: '42% 26%',
    enterX: 130,
    enterY: -20,
    delay: 440,
  },
];

const bubbleImages: Record<number, string> = {
  1: recbubble1,
  2: recbubble2,
  3: recbubble3,
  4: recbubble4,
  5: recbubble5,
  6: recbubble6,
  7: recbubble7,
  8: recbubble8,
};

const bubbleResponsiveLayout: Record<
  number,
  {
    md: { top: string; left: string };
    sm: { top: string; left: string };
  }
> = {
  1: { md: { top: '11%', left: '12%' }, sm: { top: '16%', left: '16%' } },
  2: { md: { top: '16%', left: '68%' }, sm: { top: '18%', left: '62%' } },
  3: { md: { top: '33%', left: '33%' }, sm: { top: '34%', left: '34%' } },
  4: { md: { top: '37%', left: '74%' }, sm: { top: '37%', left: '70%' } },
  5: { md: { top: '63%', left: '18%' }, sm: { top: '63%', left: '18%' } },
  6: { md: { top: '58%', left: '50%' }, sm: { top: '57%', left: '50%' } },
  7: { md: { top: '73%', left: '76%' }, sm: { top: '73%', left: '70%' } },
  8: { md: { top: '25%', left: '82%' }, sm: { top: '25%', left: '77%' } },
};

type RecommendationsBubblesProps = {
  trigger: ReactNode;
};

export default function RecommendationsBubbles({
  trigger,
}: RecommendationsBubblesProps) {
  const bubbleThumbnailPosition = '18% 14%';
  const modalFadeMs = 650;
  const bubbleOpacityMs = 780;
  const bubbleTransformMs = 1250;
  const bubbleHoverMs = 220;
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [bubblesEntered, setBubblesEntered] = useState(false);
  const [activeBubbleId, setActiveBubbleId] = useState<number | null>(null);
  const maxBubbleDelay = bubbleConfig.reduce(
    (maxDelay, bubble) => Math.max(maxDelay, bubble.delay),
    0,
  );

  useEffect(() => {
    if (!open) {
      setBubblesEntered(false);
      return;
    }

    const entryFrame = requestAnimationFrame(() => {
      setBubblesEntered(true);
    });

    return () => cancelAnimationFrame(entryFrame);
  }, [open]);

  const activeBubble = useMemo(
    () => bubbleConfig.find((bubble) => bubble.id === activeBubbleId) ?? null,
    [activeBubbleId],
  );

  const handleClose = () => {
    setOpen(false);
    setActiveBubbleId(null);
  };

  const handleBackdropClick = () => {
    if (activeBubbleId !== null) {
      setActiveBubbleId(null);
      return;
    }

    handleClose();
  };

  return (
    <>
      <Box
        component='span'
        sx={{ display: 'inline-block' }}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </Box>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open} timeout={modalFadeMs}>
          <Box
            onClick={handleBackdropClick}
            sx={{
              position: 'fixed',
              inset: 0,
              p: { xs: 2, md: 3 },
              backgroundColor: 'rgba(18, 20, 26, 0.56)',
              backdropFilter: 'blur(3px) grayscale(0.18)',
              overflow: 'hidden',
              zIndex: 1400,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                position: 'absolute',
                top: 20,
                left: 24,
                zIndex: 3,
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                pr: 2,
              }}
            >
              {t('about.recommendations_modal_title')}
            </Typography>

            <Typography
              variant='body2'
              sx={{
                position: 'absolute',
                top: 52,
                left: 24,
                zIndex: 3,
                color: 'rgba(255, 255, 255, 0.8)',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                pr: 2,
              }}
            >
              {t('about.recommendations_modal_hint')}
            </Typography>

            {bubbleConfig.map((bubble) => {
              const responsivePosition = bubbleResponsiveLayout[bubble.id];
              const isMidRange = isLgDown && !isMdDown;
              const midRangeAdjustments: Record<
                number,
                { top?: string; left?: string }
              > = {
                6: { top: '55%', left: '42%' },
                7: { top: '70%', left: '65%' },
              };
              const top = isSmDown
                ? responsivePosition.sm.top
                : isMdDown
                  ? responsivePosition.md.top
                  : isMidRange && midRangeAdjustments[bubble.id]?.top
                    ? midRangeAdjustments[bubble.id].top!
                    : bubble.top;
              const left = isSmDown
                ? responsivePosition.sm.left
                : isMdDown
                  ? responsivePosition.md.left
                  : isMidRange && midRangeAdjustments[bubble.id]?.left
                    ? midRangeAdjustments[bubble.id].left!
                    : bubble.left;
              const bubbleSize = Math.round(
                bubble.size * (isSmDown ? 0.72 : isMdDown ? 0.84 : 1),
              );
              const entryOffsetScale = isSmDown ? 0.58 : isMdDown ? 0.78 : 1;

              return (
                <Box
                  key={bubble.id}
                  component='button'
                  type='button'
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveBubbleId(bubble.id);
                  }}
                  aria-label={`${t('about.recommendation_bubble')} ${bubble.id}`}
                  sx={{
                    position: 'absolute',
                    top,
                    left,
                    width: bubbleSize,
                    height: bubbleSize,
                    borderRadius: '50%',
                    border: 'none',
                    p: 0,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    willChange: 'transform, box-shadow, filter',
                    opacity: bubblesEntered ? 1 : 0,
                    transform: bubblesEntered
                      ? 'translate3d(0, 0, 0) scale(1)'
                      : `translate3d(${Math.round(bubble.enterX * entryOffsetScale)}px, ${Math.round(bubble.enterY * entryOffsetScale)}px, 0) scale(0.72)`,
                    transition: `opacity ${bubbleOpacityMs}ms ease, transform ${bubbleTransformMs}ms cubic-bezier(0.2, 0.9, 0.22, 1), box-shadow 220ms ease, filter 220ms ease`,
                    transitionDelay: bubblesEntered
                      ? `${maxBubbleDelay - bubble.delay}ms`
                      : `${bubble.delay}ms`,
                    boxShadow:
                      activeBubbleId === bubble.id
                        ? '0 18px 34px rgba(0, 0, 0, 0.56), inset 0 0 0 2px rgba(255,255,255,0.86)'
                        : '0 12px 26px rgba(0, 0, 0, 0.44), inset 0 0 0 1px rgba(255,255,255,0.55)',
                    filter:
                      activeBubbleId === bubble.id
                        ? 'saturate(1.2) brightness(1.04)'
                        : 'none',
                    backgroundImage: `url(${bubbleImages[bubble.id]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: bubbleThumbnailPosition,
                    backgroundRepeat: 'no-repeat',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background:
                        'radial-gradient(circle at 30% 22%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.28) 23%, rgba(255,255,255,0.08) 44%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.03) 100%)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      boxShadow:
                        'inset -10px -14px 22px rgba(0, 8, 25, 0.28), inset 10px 10px 26px rgba(255, 255, 255, 0.18)',
                    },
                    '&:hover': {
                      transition: `transform ${bubbleHoverMs}ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow ${bubbleHoverMs}ms ease, filter ${bubbleHoverMs}ms ease`,
                      transform: 'translate3d(0, -8px, 0) scale(1.14)',
                      boxShadow:
                        '0 24px 40px rgba(0, 0, 0, 0.58), inset 0 0 0 2px rgba(255,255,255,0.97)',
                      filter: 'saturate(1.22) brightness(1.06)',
                    },
                    '&:focus-visible': {
                      outline: 'none',
                      transform: 'translate3d(0, -8px, 0) scale(1.14)',
                      boxShadow:
                        '0 24px 40px rgba(0, 0, 0, 0.58), inset 0 0 0 2px rgba(255,255,255,0.97), 0 0 0 4px rgba(255,255,255,0.32)',
                      filter: 'saturate(1.22) brightness(1.06)',
                    },
                  }}
                />
              );
            })}

            <Box
              sx={{
                position: 'absolute',
                right: { xs: 12, sm: 18 },
                bottom: { xs: 12, sm: 18 },
                px: 1.25,
                py: 0.65,
                borderRadius: 999,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(0, 0, 0, 0.26)',
                border: '1px solid rgba(255, 255, 255, 0.24)',
              }}
            >
              {t('about.recommendations_backdrop_close')}
            </Box>

            {activeBubble && (
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 4,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '92%', sm: '78%', md: '66%' },
                  maxWidth: 760,
                  maxHeight: { xs: '62%', md: '74%' },
                  p: { xs: 1, md: 1.2 },
                  borderRadius: 4,
                  pointerEvents: 'none',
                  background:
                    'linear-gradient(155deg, rgba(255,255,255,0.97) 0%, rgba(248,252,255,0.97) 100%)',
                  boxShadow: '0 28px 60px rgba(0,0,0,0.52)',
                  border: '1px solid rgba(235, 236, 243, 0.9)',
                  animation:
                    'previewPop 280ms cubic-bezier(0.15, 0.9, 0.27, 1)',
                  '@keyframes previewPop': {
                    '0%': {
                      opacity: 0,
                      transform: 'translate(-50%, -46%) scale(0.86)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translate(-50%, -50%) scale(1)',
                    },
                  },
                }}
              >
                <Box
                  component='img'
                  src={
                    activeBubble ? bubbleImages[activeBubble.id] : recbubble1
                  }
                  alt={t('about.recommendations_preview_alt')}
                  onClick={(event) => event.stopPropagation()}
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    maxHeight: { xs: 340, sm: 430, md: 510 },
                    objectFit: 'contain',
                    borderRadius: 3,
                    backgroundColor: '#f3f4f7',
                    pointerEvents: 'auto',
                  }}
                />
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
