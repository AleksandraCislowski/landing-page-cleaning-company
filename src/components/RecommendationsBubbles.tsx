import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Box, Fade, Modal, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import happyPerson from '../assets/happy-person.jpg';

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
    top: '8%',
    left: '8%',
    focus: '15% 25%',
    enterX: -130,
    enterY: -70,
    delay: 0,
  },
  {
    id: 2,
    size: 116,
    top: '14%',
    left: '62%',
    focus: '45% 32%',
    enterX: 120,
    enterY: -85,
    delay: 100,
  },
  {
    id: 3,
    size: 188,
    top: '28%',
    left: '28%',
    focus: '58% 44%',
    enterX: -120,
    enterY: 100,
    delay: 150,
  },
  {
    id: 4,
    size: 128,
    top: '36%',
    left: '72%',
    focus: '28% 56%',
    enterX: 90,
    enterY: 95,
    delay: 220,
  },
  {
    id: 5,
    size: 98,
    top: '60%',
    left: '14%',
    focus: '52% 48%',
    enterX: -110,
    enterY: 120,
    delay: 280,
  },
  {
    id: 6,
    size: 172,
    top: '58%',
    left: '44%',
    focus: '35% 38%',
    enterX: 25,
    enterY: 140,
    delay: 340,
  },
  {
    id: 7,
    size: 108,
    top: '67%',
    left: '74%',
    focus: '69% 40%',
    enterX: 110,
    enterY: 135,
    delay: 380,
  },
  {
    id: 8,
    size: 90,
    top: '24%',
    left: '88%',
    focus: '42% 26%',
    enterX: 130,
    enterY: -20,
    delay: 440,
  },
];

type RecommendationsBubblesProps = {
  trigger: ReactNode;
};

export default function RecommendationsBubbles({
  trigger,
}: RecommendationsBubblesProps) {
  const modalFadeMs = 650;
  const bubbleOpacityMs = 780;
  const bubbleTransformMs = 1250;
  const bubbleHoverMs = 220;
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
            onClick={handleClose}
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

            {bubbleConfig.map((bubble) => (
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
                  top: bubble.top,
                  left: bubble.left,
                  width: bubble.size,
                  height: bubble.size,
                  borderRadius: '50%',
                  border: 'none',
                  p: 0,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  willChange: 'transform, box-shadow, filter',
                  opacity: bubblesEntered ? 1 : 0,
                  transform: bubblesEntered
                    ? 'translate3d(0, 0, 0) scale(1)'
                    : `translate3d(${bubble.enterX}px, ${bubble.enterY}px, 0) scale(0.72)`,
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
                  backgroundImage: `url(${happyPerson})`,
                  backgroundSize: 'cover',
                  backgroundPosition: bubble.focus,
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
            ))}

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
                onClick={(event) => event.stopPropagation()}
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
                  src={happyPerson}
                  alt={t('about.recommendations_preview_alt')}
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    maxHeight: { xs: 340, sm: 430, md: 510 },
                    objectFit: 'contain',
                    borderRadius: 3,
                    backgroundColor: '#f3f4f7',
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
