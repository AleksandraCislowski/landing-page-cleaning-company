import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ImagePlaceholder from './ImagePlaceholder';

type Service = {
  icon: React.ReactElement;
  nameKey: string;
  descKey: string;
  detailKey: string;
  bulletKeys: string[];
};

const services: Service[] = [
  {
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.residential',
    descKey: 'services.residential_desc',
    detailKey: 'services.residential_detail',
    bulletKeys: [
      'services.residential_b1',
      'services.residential_b2',
      'services.residential_b3',
      'services.residential_b4',
    ],
  },
  {
    icon: <ApartmentIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.commercial',
    descKey: 'services.commercial_desc',
    detailKey: 'services.commercial_detail',
    bulletKeys: [
      'services.commercial_b1',
      'services.commercial_b2',
      'services.commercial_b3',
      'services.commercial_b4',
    ],
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.deep_clean',
    descKey: 'services.deep_clean_desc',
    detailKey: 'services.deep_clean_detail',
    bulletKeys: [
      'services.deep_clean_b1',
      'services.deep_clean_b2',
      'services.deep_clean_b3',
      'services.deep_clean_b4',
    ],
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 48 }} />,
    nameKey: 'services.move',
    descKey: 'services.move_desc',
    detailKey: 'services.move_detail',
    bulletKeys: [
      'services.move_b1',
      'services.move_b2',
      'services.move_b3',
      'services.move_b4',
    ],
  },
];

export default function Services() {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <Box id='services' sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{ textAlign: 'center', mb: 6 }}>
          {t('services.title')}
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                onClick={() => setSelected(service)}
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
                <ImagePlaceholder height={150} borderRadius={0} />
                <CardContent sx={{ p: 3, flex: 1 }}>
                  <Box sx={{ color: '#667eea', mb: 2 }}>{service.icon}</Box>
                  <Typography
                    variant='h6'
                    sx={{ mb: 1, fontWeight: 'bold', color: '#333' }}
                  >
                    {t(service.nameKey)}
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#666' }}>
                    {t(service.descKey)}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{
                      display: 'block',
                      mt: 2,
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
          ))}
        </Grid>
      </Container>

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth='md'
        fullWidth
        fullScreen={fullScreen}
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: 5 },
            overflow: 'hidden',
          },
        }}
      >
        {selected && (
          <>
            <Box sx={{ position: 'relative' }}>
              <ImagePlaceholder height={200} borderRadius={0} />
              <IconButton
                aria-label='close'
                onClick={() => setSelected(null)}
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  color: '#fff',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <DialogContent sx={{ px: { xs: 2.5, sm: 4 }, py: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(45, 0, 84, 0.08)',
                    color: theme.palette.primary.main,
                  }}
                >
                  {selected.icon}
                </Box>
                <Typography variant='h5' sx={{ fontWeight: 700 }}>
                  {t(selected.nameKey)}
                </Typography>
              </Box>

              <Typography
                variant='body1'
                sx={{ color: '#555', lineHeight: 1.75, mb: 3 }}
              >
                {t(selected.detailKey)}
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

              <List disablePadding>
                {selected.bulletKeys.map((key) => (
                  <ListItem key={key} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon
                        fontSize='small'
                        sx={{ color: theme.palette.secondary.main }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(key)}
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: { color: '#333', fontWeight: 500 },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
