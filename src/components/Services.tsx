import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import ResidentialServiceCard from './services/ResidentialServiceCard';
import ResidentialServiceDialogContent from './services/ResidentialServiceDialogContent';
import DeepCleanServiceCard from './services/DeepCleanServiceCard';
import DeepCleanServiceDialogContent from './services/DeepCleanServiceDialogContent';
import WindowServiceCard from './services/WindowServiceCard';
import WindowServiceDialogContent from './services/WindowServiceDialogContent';
import ExtraServiceCard from './services/ExtraServiceCard';
import ExtraServiceDialogContent from './services/ExtraServiceDialogContent';
import { ServiceId, serviceDefinitions } from './services/serviceDefinitions';

export default function Services() {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | null>(
    null,
  );
  const selected = selectedServiceId
    ? serviceDefinitions[selectedServiceId]
    : null;
  const isResidentialSelected = selectedServiceId === 'residential';

  return (
    <Box id='services' sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{ textAlign: 'center', mb: 6 }}>
          {t('services.title')}
        </Typography>
        <Grid container spacing={3}>
          <ResidentialServiceCard onSelect={setSelectedServiceId} />
          <DeepCleanServiceCard onSelect={setSelectedServiceId} />
          <WindowServiceCard onSelect={setSelectedServiceId} />
          <ExtraServiceCard onSelect={setSelectedServiceId} />
        </Grid>
      </Container>
      <Dialog
        open={Boolean(selectedServiceId)}
        onClose={() => setSelectedServiceId(null)}
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
              <Box
                component='img'
                src={selected.image}
                alt=''
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <IconButton
                aria-label='close'
                onClick={() => setSelectedServiceId(null)}
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

              {isResidentialSelected ? (
                <ResidentialServiceDialogContent />
              ) : selectedServiceId === 'deep_clean' ? (
                <DeepCleanServiceDialogContent />
              ) : selectedServiceId === 'window_clean' ? (
                <WindowServiceDialogContent />
              ) : selectedServiceId === 'extra' ? (
                <ExtraServiceDialogContent />
              ) : (
                <></>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
