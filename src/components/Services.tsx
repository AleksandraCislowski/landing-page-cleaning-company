import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Fab,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | null>(
    null,
  );
  const selected = selectedServiceId
    ? serviceDefinitions[selectedServiceId]
    : null;
  const isResidentialSelected = selectedServiceId === 'residential';
  const contactEmail = 'cislowski.aleksandra@gmail.com';
  const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
    t('services.mail_subject'),
  )}&body=${encodeURIComponent(t('services.mail_body'))}`;
  const handleContactMailClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = contactMailto;
  };

  const handleOpenResidentialGuide = () => {
    setSelectedServiceId(null);
    window.setTimeout(() => {
      navigate('/residential-guide');
    }, 120);
  };

  return (
    <Box id='services' sx={{ py: { xs: 6, md: 10 }, background: '#f7f6fb' }}>
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
        transitionDuration={{ enter: 320, exit: 220 }}
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: 5 },
            overflow: 'hidden',
            boxShadow: '0 30px 70px rgba(18, 7, 30, 0.34)',
            animation: 'serviceDialogIn 320ms cubic-bezier(0.22, 1, 0.36, 1)',
            '@keyframes serviceDialogIn': {
              '0%': {
                opacity: 0,
                transform: 'translateY(14px) scale(0.98)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0) scale(1)',
              },
            },
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(16, 8, 27, 0.46)',
            backdropFilter: 'blur(3px)',
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
            <DialogContent
              sx={{
                px: { xs: 2.5, sm: 4 },
                pt: 3,
                pb: isResidentialSelected ? 3 : { xs: 11, sm: 10 },
              }}
            >
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
            {isResidentialSelected && (
              <Tooltip
                title={t('services.residential_guide_cta')}
                placement='left'
                arrow
              >
                <Fab
                  color='secondary'
                  aria-label='open residential guide'
                  onClick={handleOpenResidentialGuide}
                  sx={{
                    position: 'absolute',
                    right: { xs: 16, sm: 24 },
                    bottom: { xs: 88, sm: 96 },
                    zIndex: 2,
                  }}
                >
                  <MenuBookIcon />
                </Fab>
              </Tooltip>
            )}
            <Tooltip title={t('contact.title')} placement='left' arrow>
              <Fab
                color='primary'
                aria-label='go to contact form'
                onClick={handleContactMailClick}
                sx={{
                  position: 'absolute',
                  right: { xs: 16, sm: 24 },
                  bottom: { xs: 16, sm: 24 },
                  zIndex: 2,
                }}
              >
                <MailOutlineIcon />
              </Fab>
            </Tooltip>
          </>
        )}
      </Dialog>
    </Box>
  );
}
