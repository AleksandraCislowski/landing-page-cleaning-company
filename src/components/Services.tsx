import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const services = [
  {
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.residential',
    descKey: 'services.residential_desc',
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.commercial',
    descKey: 'services.commercial_desc',
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.deep_clean',
    descKey: 'services.deep_clean_desc',
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.move',
    descKey: 'services.move_desc',
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <Box id='services' sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#333' }}
        >
          {t('services.title')}
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box sx={{ color: '#667eea', mb: 2 }}>{service.icon}</Box>
                <CardContent sx={{ p: 0, flex: 1 }}>
                  <Typography
                    variant='h6'
                    sx={{ mb: 1, fontWeight: 'bold', color: '#333' }}
                  >
                    {t(service.nameKey)}
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#666' }}>
                    {t(service.descKey)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
