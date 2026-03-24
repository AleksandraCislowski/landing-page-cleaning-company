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
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'transform 0.32s ease, box-shadow 0.32s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 18px 34px rgba(18, 7, 30, 0.2)',
            '&::after': {
              transform: 'translateX(180%)',
              opacity: 1,
            },
            '& .service-icon-wrap': {
              transform: 'scale(1.08)',
            },
          },
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-42%',
            width: '30%',
            height: '100%',
            background:
              'linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.33) 45%, rgba(255,255,255,0) 100%)',
            transform: 'translateX(-90%)',
            opacity: 0,
            transition: 'transform 520ms ease, opacity 240ms ease',
            pointerEvents: 'none',
            zIndex: 2,
          },
        }}
      >
        <Box
          component='img'
          src={service.image}
          alt=''
          loading='lazy'
          fetchPriority='low'
          decoding='async'
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
          <Box
            className='service-icon-wrap'
            sx={{
              color: '#667eea',
              mb: 2,
              transition: 'transform 320ms ease',
              transformOrigin: 'center',
            }}
          >
            {service.icon}
          </Box>
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
