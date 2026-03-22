import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ServiceDefinition } from './serviceDefinitions';

type StandardServiceDialogContentProps = {
  service: ServiceDefinition;
  contentKey?: string;
};

export default function StandardServiceDialogContent({
  service,
  contentKey,
}: StandardServiceDialogContentProps) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const baseDetail = t(service.detailKey);
  const hasExtraContent = Boolean(contentKey && i18n.exists(contentKey));
  const extraContent = hasExtraContent
    ? t(contentKey as string, { returnObjects: true })
    : [];
  const extraParagraphs = Array.isArray(extraContent)
    ? extraContent
    : typeof extraContent === 'string'
      ? [extraContent]
      : [];
  const filteredExtraParagraphs = extraParagraphs.filter(Boolean);
  const priceLinePattern = /\s-\sSEK\s\d+/i;
  const infoParagraphs = filteredExtraParagraphs.filter(
    (paragraph) => !priceLinePattern.test(paragraph),
  );
  const priceParagraphs = filteredExtraParagraphs.filter((paragraph) =>
    priceLinePattern.test(paragraph),
  );

  return (
    <>
      <Typography
        variant='body1'
        sx={{ color: '#555', lineHeight: 1.75, mb: 2 }}
      >
        {baseDetail}
      </Typography>

      <Typography
        variant='overline'
        sx={{
          display: 'block',
          mb: 1.2,
          color: theme.palette.primary.main,
          fontWeight: 700,
          letterSpacing: '0.12em',
        }}
      >
        {t('services.includes')}
      </Typography>

      {infoParagraphs.length > 0 && (
        <Box
          sx={{
            p: { xs: 2, sm: 2.4 },
            mb: priceParagraphs.length > 0 ? 2 : 3,
            borderRadius: 2,
            border: '1px solid rgba(45, 0, 84, 0.12)',
            backgroundColor: '#fff',
          }}
        >
          {infoParagraphs.map((paragraph, index) => (
            <Typography
              key={`${service.id}-extra-info-${index}`}
              variant='body1'
              sx={{
                color: '#555',
                lineHeight: 1.75,
                mb: index === infoParagraphs.length - 1 ? 0 : 1.5,
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      )}

      {priceParagraphs.length > 0 && (
        <Box
          sx={{
            p: { xs: 2, sm: 2.4 },
            mb: 3,
            borderRadius: 2,
            border: '1px solid rgba(45, 0, 84, 0.15)',
            backgroundColor: 'rgba(45, 0, 84, 0.03)',
          }}
        >
          {priceParagraphs.map((paragraph, index) => {
            const [label, price] = paragraph.split(/\s-\s(SEK\s\d+.*)$/i);

            return (
              <Box
                key={`${service.id}-extra-price-${index}`}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 2,
                  py: 1,
                  borderBottom:
                    index === priceParagraphs.length - 1
                      ? 'none'
                      : '1px dashed rgba(45, 0, 84, 0.2)',
                }}
              >
                <Typography
                  variant='body2'
                  sx={{ color: '#333', fontWeight: 600 }}
                >
                  {label?.trim() || paragraph}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {price?.trim() || ''}
                </Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
}
