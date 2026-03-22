import { Typography, useTheme } from '@mui/material';
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
          mb: 1,
          color: theme.palette.primary.main,
          fontWeight: 700,
          letterSpacing: '0.12em',
        }}
      >
        {t('services.includes')}
      </Typography>

      {filteredExtraParagraphs.map((paragraph, index) => (
        <Typography
          key={`${service.id}-extra-${index}`}
          variant='body1'
          sx={{
            color: '#555',
            lineHeight: 1.75,
            mb: index === filteredExtraParagraphs.length - 1 ? 3 : 2,
          }}
        >
          {paragraph}
        </Typography>
      ))}
    </>
  );
}
