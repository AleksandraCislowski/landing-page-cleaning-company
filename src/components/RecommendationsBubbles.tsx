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
import recbubble9 from '../assets/recommendation bubbles photos/rec9.png';
import recbubble10 from '../assets/recommendation bubbles photos/rec10.png';
import recbubble11 from '../assets/recommendation bubbles photos/rec11.png';
import recbubble12 from '../assets/recommendation bubbles photos/rec12.png';
import recbubble13 from '../assets/recommendation bubbles photos/rec13.png';

type BubbleConfig = {
  id: number;
  size: number;
  top: string;
  left: string;
  focus: string;
  enterX: number;
  enterY: number;
  delay: number;
  placeholderAccent?: string;
};

type BubbleSpread = {
  offsetX: number;
  offsetY: number;
  scale: number;
};

const parsePercent = (value: string) => Number.parseFloat(value);

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
  {
    id: 9,
    size: 72,
    top: '9%',
    left: '43%',
    focus: '50% 50%',
    enterX: -40,
    enterY: -110,
    delay: 500,
  },
  {
    id: 10,
    size: 66,
    top: '47%',
    left: '16%',
    focus: '50% 50%',
    enterX: -150,
    enterY: 50,
    delay: 560,
  },
  {
    id: 11,
    size: 76,
    top: '49%',
    left: '78%',
    focus: '50% 50%',
    enterX: 145,
    enterY: 40,
    delay: 620,
  },
  {
    id: 12,
    size: 68,
    top: '83%',
    left: '44%',
    focus: '50% 50%',
    enterX: 15,
    enterY: 130,
    delay: 680,
  },
  {
    id: 13,
    size: 74,
    top: '76%',
    left: '67%',
    focus: '50% 50%',
    enterX: 120,
    enterY: 110,
    delay: 740,
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
  9: recbubble9,
  10: recbubble10,
  11: recbubble11,
  12: recbubble12,
  13: recbubble13,
};

const bubbleResponsiveLayout: Record<
  number,
  {
    lg: { top: string; left: string };
    md: { top: string; left: string };
    sm: { top: string; left: string };
  }
> = {
  1: {
    lg: { top: '12%', left: '28%' },
    md: { top: '11%', left: '12%' },
    sm: { top: '16%', left: '16%' },
  },
  2: {
    lg: { top: '15%', left: '54%' },
    md: { top: '16%', left: '68%' },
    sm: { top: '18%', left: '62%' },
  },
  3: {
    lg: { top: '30%', left: '37%' },
    md: { top: '33%', left: '33%' },
    sm: { top: '34%', left: '34%' },
  },
  4: {
    lg: { top: '34%', left: '60%' },
    md: { top: '37%', left: '74%' },
    sm: { top: '37%', left: '70%' },
  },
  5: {
    lg: { top: '60%', left: '31%' },
    md: { top: '63%', left: '18%' },
    sm: { top: '63%', left: '18%' },
  },
  6: {
    lg: { top: '58%', left: '45%' },
    md: { top: '58%', left: '50%' },
    sm: { top: '57%', left: '50%' },
  },
  7: {
    lg: { top: '66%', left: '59%' },
    md: { top: '73%', left: '76%' },
    sm: { top: '73%', left: '70%' },
  },
  8: {
    lg: { top: '23%', left: '66%' },
    md: { top: '25%', left: '82%' },
    sm: { top: '25%', left: '77%' },
  },
  9: {
    lg: { top: '9%', left: '44%' },
    md: { top: '10%', left: '46%' },
    sm: { top: '11%', left: '48%' },
  },
  10: {
    lg: { top: '47%', left: '22%' },
    md: { top: '49%', left: '8%' },
    sm: { top: '49%', left: '10%' },
  },
  11: {
    lg: { top: '49%', left: '72%' },
    md: { top: '50%', left: '87%' },
    sm: { top: '51%', left: '78%' },
  },
  12: {
    lg: { top: '83%', left: '45%' },
    md: { top: '83%', left: '47%' },
    sm: { top: '84%', left: '48%' },
  },
  13: {
    lg: { top: '76%', left: '66%' },
    md: { top: '79%', left: '74%' },
    sm: { top: '79%', left: '72%' },
  },
};

type RecommendationsBubblesProps = {
  trigger: ReactNode;
};

export default function RecommendationsBubbles({
  trigger,
}: RecommendationsBubblesProps) {
  const bubbleThumbnailPosition = '0% 0%';
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
  const activeBubbleImage = activeBubble ? bubbleImages[activeBubble.id] : null;

  const getBubbleSpread = (
    bubble: BubbleConfig,
    left: string,
    top: string,
  ): BubbleSpread => {
    if (!activeBubbleImage || activeBubbleId === null) {
      return { offsetX: 0, offsetY: 0, scale: 1 };
    }

    const x = parsePercent(left);
    const y = parsePercent(top);
    const activeBubbleConfig = activeBubble ?? bubble;
    const activeLayout = bubbleResponsiveLayout[activeBubbleId];
    const activeLeft = isSmDown
      ? activeLayout.sm.left
      : isMdDown
        ? activeLayout.md.left
        : activeBubbleConfig.left;
    const activeTop = isSmDown
      ? activeLayout.sm.top
      : isMdDown
        ? activeLayout.md.top
        : activeBubbleConfig.top;
    const activeX = parsePercent(activeLeft);
    const activeY = parsePercent(activeTop);
    const previewZone = isSmDown
      ? { minX: 18, maxX: 82, minY: 20, maxY: 80 }
      : isMdDown
        ? { minX: 19, maxX: 81, minY: 21, maxY: 79 }
        : { minX: 23, maxX: 77, minY: 19, maxY: 81 };
    const nearZone = {
      minX: previewZone.minX - 8,
      maxX: previewZone.maxX + 8,
      minY: previewZone.minY - 8,
      maxY: previewZone.maxY + 8,
    };
    const horizontalPush = isSmDown ? 92 : isMdDown ? 148 : 220;
    const verticalPush = isSmDown ? 84 : isMdDown ? 116 : 156;
    const spreadBoost = isSmDown ? 1.16 : isMdDown ? 1.24 : 1.34;
    const lateralSpread = isSmDown ? 7 : isMdDown ? 12 : 18;
    const seed = ((activeBubbleId * 13 + bubble.id * 7) % 3) - 1;
    const xDirection = x < 50 ? -1 : 1;
    const yDirection = y < 50 ? -1 : 1;
    const activeXDirection = activeX < 50 ? -1 : 1;
    const activeYDirection = activeY < 50 ? -1 : 1;
    const insideZone =
      x > previewZone.minX &&
      x < previewZone.maxX &&
      y > previewZone.minY &&
      y < previewZone.maxY;
    const nearPreview =
      x > nearZone.minX &&
      x < nearZone.maxX &&
      y > nearZone.minY &&
      y < nearZone.maxY;

    if (bubble.id === activeBubbleId) {
      return {
        offsetX:
          activeXDirection * (isSmDown ? 48 : isMdDown ? 70 : 92) +
          seed * lateralSpread,
        offsetY: activeYDirection * (isSmDown ? 16 : 22),
        scale: 0.92,
      };
    }

    if (insideZone) {
      const preferVertical =
        isSmDown || Math.abs(y - 50) <= Math.abs(x - 50) * 0.72;

      if (preferVertical) {
        return {
          offsetX:
            xDirection * (horizontalPush * 0.28 * spreadBoost) +
            seed * lateralSpread,
          offsetY:
            yDirection * verticalPush * spreadBoost +
            (activeXDirection === xDirection ? 14 : -14),
          scale: bubble.size <= 80 ? 0.96 : 0.92,
        };
      }

      return {
        offsetX:
          xDirection * horizontalPush * spreadBoost +
          (activeYDirection === yDirection ? 18 : -18),
        offsetY:
          yDirection * (verticalPush * 0.32) + seed * (lateralSpread - 2),
        scale: bubble.size <= 80 ? 0.97 : 0.93,
      };
    }

    if (nearPreview) {
      return {
        offsetX:
          xDirection * (horizontalPush * 0.52 * spreadBoost) +
          seed * lateralSpread,
        offsetY:
          (y >= activeY ? 1 : -1) * (verticalPush * 0.24) +
          seed * (lateralSpread - 4),
        scale: 0.97,
      };
    }

    return {
      offsetX: xDirection * (isSmDown ? 18 : 28) + seed * 4,
      offsetY: yDirection * (isSmDown ? 10 : 16),
      scale: 1,
    };
  };

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

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby='client-reviews-title'
        aria-describedby='client-reviews-description'
      >
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
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 16, sm: 20 },
                left: { xs: 16, sm: 24 },
                zIndex: 3,
                maxWidth: {
                  xs: 'calc(100% - 28px)',
                  sm: 'min(520px, calc(100% - 44px))',
                },
                pr: { xs: 3, sm: 2 },
              }}
            >
              <Typography
                id='client-reviews-title'
                variant='h6'
                sx={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                  lineHeight: 1.2,
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                }}
              >
                {t('about.recommendations_modal_title')}
              </Typography>

              <Typography
                id='client-reviews-description'
                variant='body2'
                sx={{
                  mt: 0.6,
                  color: 'rgba(255, 255, 255, 0.8)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  lineHeight: 1.35,
                }}
              >
                {t('about.recommendations_modal_hint')}
              </Typography>
            </Box>

            {bubbleConfig.map((bubble) => {
              const responsivePosition = bubbleResponsiveLayout[bubble.id];
              const bubbleImage = bubbleImages[bubble.id];
              const isPlaceholder = !bubbleImage;
              const isMidRange = isLgDown && !isMdDown;
              const midRangeAdjustments: Record<
                number,
                { top?: string; left?: string }
              > = {
                1: { left: '26%' },
                6: { top: '55%', left: '43%' },
                7: { top: '70%', left: '63%' },
                8: { left: '67%' },
                10: { top: '48%', left: '19%' },
                11: { top: '50%', left: '75%' },
              };
              const midRangeTop = midRangeAdjustments[bubble.id]?.top;
              const midRangeLeft = midRangeAdjustments[bubble.id]?.left;
              const top = isSmDown
                ? responsivePosition.sm.top
                : isMdDown
                  ? responsivePosition.md.top
                  : isMidRange && midRangeTop
                    ? midRangeTop
                    : isMidRange
                      ? bubble.top
                      : responsivePosition.lg.top;
              const left = isSmDown
                ? responsivePosition.sm.left
                : isMdDown
                  ? responsivePosition.md.left
                  : isMidRange && midRangeLeft
                    ? midRangeLeft
                    : isMidRange
                      ? bubble.left
                      : responsivePosition.lg.left;
              const bubbleSize = Math.round(
                bubble.size * (isSmDown ? 0.72 : isMdDown ? 0.84 : 1),
              );
              const entryOffsetScale = isSmDown ? 0.58 : isMdDown ? 0.78 : 1;
              const hoverScale = bubble.size <= 80 ? 1.08 : 1.14;
              const hoverTranslateY = bubble.size <= 80 ? -5 : -8;
              const isPreviewOpen = Boolean(activeBubbleImage);
              const rawSpread = getBubbleSpread(bubble, left, top);
              const vw =
                typeof window !== 'undefined' ? window.innerWidth : 800;
              const vh =
                typeof window !== 'undefined' ? window.innerHeight : 900;
              const safeMargin = 6;
              const leftPx = (parsePercent(left) / 100) * vw;
              const topPx = (parsePercent(top) / 100) * vh;
              const spread = {
                offsetX: Math.min(
                  Math.max(rawSpread.offsetX, safeMargin - leftPx),
                  vw - leftPx - bubbleSize - safeMargin,
                ),
                offsetY: Math.min(
                  Math.max(rawSpread.offsetY, safeMargin - topPx),
                  vh - topPx - bubbleSize - safeMargin,
                ),
                scale: rawSpread.scale,
              };
              const motionDelay = isPreviewOpen
                ? `${Math.max(0, bubble.delay - 220)}ms`
                : bubblesEntered
                  ? `${maxBubbleDelay - bubble.delay}ms`
                  : `${bubble.delay}ms`;
              const restingTransform = `translate3d(${spread.offsetX}px, ${spread.offsetY}px, 0) scale(${spread.scale})`;
              const entryTransform = `translate3d(${Math.round(bubble.enterX * entryOffsetScale) + spread.offsetX}px, ${Math.round(bubble.enterY * entryOffsetScale) + spread.offsetY}px, 0) scale(${(0.72 * spread.scale).toFixed(3)})`;

              return (
                <Box
                  key={bubble.id}
                  component='button'
                  type='button'
                  onClick={(event) => {
                    event.stopPropagation();
                    if (!bubbleImage) {
                      return;
                    }

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
                    cursor: bubbleImage ? 'pointer' : 'default',
                    overflow: 'hidden',
                    willChange: 'transform, box-shadow, filter',
                    opacity: bubblesEntered ? 1 : 0,
                    transform: bubblesEntered
                      ? restingTransform
                      : entryTransform,
                    transition: `opacity ${bubbleOpacityMs}ms ease, transform ${bubbleTransformMs}ms cubic-bezier(0.2, 0.9, 0.22, 1), box-shadow 220ms ease, filter 220ms ease`,
                    transitionDelay: motionDelay,
                    boxShadow:
                      activeBubbleId === bubble.id
                        ? '0 18px 34px rgba(0, 0, 0, 0.56), inset 0 0 0 2px rgba(255,255,255,0.86)'
                        : '0 12px 26px rgba(0, 0, 0, 0.44), inset 0 0 0 1px rgba(255,255,255,0.55)',
                    filter:
                      activeBubbleId === bubble.id
                        ? 'saturate(1.2) brightness(1.04)'
                        : 'none',
                    backgroundImage: bubbleImage
                      ? `url(${bubbleImage})`
                      : `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 18%, ${bubble.placeholderAccent ?? 'rgba(155, 189, 212, 0.92)'} 20%, rgba(255,255,255,0.18) 58%, rgba(10,30,48,0.2) 100%)`,
                    backgroundSize: bubbleImage ? 'cover' : '100% 100%',
                    backgroundPosition: bubbleImage
                      ? bubbleThumbnailPosition
                      : 'center',
                    backgroundRepeat: 'no-repeat',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: isPlaceholder
                        ? 'radial-gradient(circle at 30% 22%, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.34) 24%, rgba(255,255,255,0.1) 46%, rgba(255,255,255,0.04) 66%, rgba(255,255,255,0.02) 100%)'
                        : 'radial-gradient(circle at 30% 22%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.28) 23%, rgba(255,255,255,0.08) 44%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.03) 100%)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      boxShadow:
                        'inset -10px -14px 22px rgba(0, 8, 25, 0.28), inset 10px 10px 26px rgba(255, 255, 255, 0.18)',
                      background: isPlaceholder
                        ? 'radial-gradient(circle at 66% 68%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 10%, transparent 11%), radial-gradient(circle at 42% 40%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 12%, transparent 13%), radial-gradient(circle at 60% 28%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 8%, transparent 9%)'
                        : 'none',
                    },
                    ...(bubbleImage && !isPreviewOpen
                      ? {
                          '&:hover': {
                            transition: `transform ${bubbleHoverMs}ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow ${bubbleHoverMs}ms ease, filter ${bubbleHoverMs}ms ease`,
                            transform: `translate3d(${spread.offsetX}px, ${spread.offsetY + hoverTranslateY}px, 0) scale(${(spread.scale * hoverScale).toFixed(3)})`,
                            boxShadow:
                              '0 24px 40px rgba(0, 0, 0, 0.58), inset 0 0 0 2px rgba(255,255,255,0.97)',
                            filter: 'saturate(1.22) brightness(1.06)',
                          },
                          '&:focus-visible': {
                            outline: 'none',
                            transform: `translate3d(${spread.offsetX}px, ${spread.offsetY + hoverTranslateY}px, 0) scale(${(spread.scale * hoverScale).toFixed(3)})`,
                            boxShadow:
                              '0 24px 40px rgba(0, 0, 0, 0.58), inset 0 0 0 2px rgba(255,255,255,0.97), 0 0 0 4px rgba(255,255,255,0.32)',
                            filter: 'saturate(1.22) brightness(1.06)',
                          },
                        }
                      : {}),
                  }}
                />
              );
            })}

            <Box
              aria-hidden='true'
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

            {activeBubble && activeBubbleImage && (
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
                  src={activeBubbleImage}
                  alt={t('about.recommendations_preview_alt')}
                  loading='lazy'
                  fetchPriority='low'
                  decoding='async'
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
