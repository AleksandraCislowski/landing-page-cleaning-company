import { Container, Typography, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SchoolIcon from '@mui/icons-material/School';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Face2Icon from '@mui/icons-material/Face2';
import ImagePlaceholder from './ImagePlaceholder';
import { FirmaYearCounter, PersonYearCounter } from './YearCounter';
import person from '../assets/person.jpg';
import happyperson from '../assets/happy-person.jpg';
import rutLogo from '../assets/rut-avdrag-logo.png';
import tryggLogo from '../assets/trygghansa-logo.png';

const reasons = [
  {
    icon: (
      <SchoolIcon
        sx={{ fontSize: 40, color: (theme) => theme.palette.primary.main }}
      />
    ),
    nameKey: 'about.trained',
  },
  {
    icon: (
      <RecyclingIcon
        sx={{ fontSize: 40, color: (theme) => theme.palette.primary.main }}
      />
    ),
    nameKey: 'about.eco',
  },
  {
    icon: (
      <AccessTimeIcon
        sx={{ fontSize: 40, color: (theme) => theme.palette.primary.main }}
      />
    ),
    nameKey: 'about.reliable',
  },

  {
    icon: (
      <SupportAgentIcon
        sx={{ fontSize: 40, color: (theme) => theme.palette.primary.main }}
      />
    ),
    nameKey: 'about.quickservice',
  },
  {
    icon: (
      <ContentPasteOffIcon
        sx={{ fontSize: 40, color: (theme) => theme.palette.primary.main }}
      />
    ),
    nameKey: 'about.noticeperiod',
  },
  {
    icon: (
      <Face2Icon
        sx={{ fontSize: 40, color: (theme) => theme.palette.primary.main }}
      />
    ),
    nameKey: 'about.permanentpersonnel',
  },
  {
    icon: (
      <img
        src={rutLogo}
        alt='RUT Logo'
        style={{ width: 65, height: 65, objectFit: 'contain' }}
      />
    ),
    nameKey: 'about.rut',
    isLogo: true,
  },
  {
    icon: (
      <img
        src={tryggLogo}
        alt='Trygghansa Logo'
        style={{ height: 36, objectFit: 'contain' }}
      />
    ),
    nameKey: 'about.trygghansa',
    isLogo: true,
  },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <Box id='about' sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth='lg'>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems='center'>
          <Grid item xs={12} md={6}>
            <ImagePlaceholder
              height={570}
              src={person}
              alt='Owner of the company - Aleksandra Cislowski'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              {t('about.title')}
            </Typography>
            <Typography
              variant='body1'
              sx={{ mb: 4, color: '#666', lineHeight: 1.8 }}
            >
              {t('about.text1')}
              <PersonYearCounter />
              {t('about.text2')}
              <FirmaYearCounter />
              {t('about.text3')}
              <br />
              {t('about.text4')}
              <br />
              {t('about.text5')}
              <br />
              {t('about.text6')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                mt: { xs: 1, md: 2 },
                px: { xs: 0, md: 1 },
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  mb: 3,
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: 'bold',
                }}
              >
                {t('about.why_choose')}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    lg: 'repeat(3, minmax(0, 1fr))',
                  },
                  gap: { xs: 2, lg: 3 },
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, minmax(0, 1fr))',
                    },
                    gap: 1.5,
                    gridColumn: { xs: 'auto', lg: 'span 2' },
                  }}
                >
                  {reasons.map((reason, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.75,
                        minHeight: 72,
                        px: { xs: 1.75, md: 2.25 },
                        py: 1.5,
                        border: '1px solid rgba(45, 0, 84, 0.1)',
                        background:
                          'linear-gradient(90deg, rgba(45, 0, 84, 0.035) 0%, rgba(45, 0, 84, 0.012) 100%)',
                        borderRadius: 3,
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
                        }}
                      >
                        {reason.icon}
                      </Box>
                      <Typography
                        variant='body2'
                        sx={{
                          fontWeight: 600,
                          color: '#1f1f1f',
                          lineHeight: 1.45,
                        }}
                      >
                        {t(reason.nameKey)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    minHeight: { xs: 240, sm: 300, lg: '100%' },
                  }}
                >
                  <ImagePlaceholder
                    height={380}
                    src={happyperson}
                    alt='Picture of a happy woman with orange sunglasses.'
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
