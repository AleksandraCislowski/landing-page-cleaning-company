import {
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ServiceId, serviceDefinitions } from './serviceDefinitions';

type ServicePreviewCardProps = {
  serviceId: ServiceId;
  onSelect: (serviceId: ServiceId) => void;
};

export default function ServicePreviewCard({
  serviceId,
  onSelect,
}: ServicePreviewCardProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const service = serviceDefinitions[serviceId];

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        onClick={() => onSelect(serviceId)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
          overflow: 'hidden',
        }}
      >
        <Box
          component='img'
          src={service.image}
          alt=''
          sx={{
            width: '100%',
            height: 150,
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <CardContent
          sx={{
            p: 3,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ color: '#667eea', mb: 2 }}>{service.icon}</Box>
          <Typography
            variant='h6'
            sx={{ mb: 1, fontWeight: 'bold', color: '#333' }}
          >
            {t(service.nameKey)}
          </Typography>
          <Typography variant='body2' sx={{ color: '#666', flexGrow: 1 }}>
            {t(service.descKey)}
          </Typography>
          <Typography
            variant='caption'
            sx={{
              display: 'block',
              mt: 'auto',
              pt: 2,
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            {t('services.learn_more')} →
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
