import { Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ServiceDefinition } from './serviceDefinitions';

type StandardServiceDialogContentProps = {
  service: ServiceDefinition;
};

export default function StandardServiceDialogContent({
  service,
}: StandardServiceDialogContentProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Typography
        variant='body1'
        sx={{ color: '#555', lineHeight: 1.75, mb: 3 }}
      >
        {t(service.detailKey)}
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
    </>
  );
}
