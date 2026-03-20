import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SchoolIcon from '@mui/icons-material/School';
import RecyclingIcon from '@mui/icons-material/Recycling';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ImagePlaceholder from './ImagePlaceholder';
import person from '../assets/person.jpg';
import { FirmaYearCounter, PersonYearCounter } from './YearCounter';

const reasons = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: '#667eea' }} />,
    nameKey: 'about.trained',
  },
  {
    icon: <RecyclingIcon sx={{ fontSize: 40, color: '#667eea' }} />,
    nameKey: 'about.eco',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#667eea' }} />,
    nameKey: 'about.reliable',
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#667eea' }} />,
    nameKey: 'about.insured',
  },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <Box id='about' sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} alignItems='center'>
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
          <Typography
            variant='h5'
            sx={{
              my: 3,
              color: (theme) => theme.palette.primary.main,
            }}
          >
            {t('about.why_choose')}
          </Typography>
          <Grid container spacing={2}>
            {reasons.map((reason, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {reason.icon}
                    <Typography
                      variant='body2'
                      sx={{ mt: 2, fontWeight: 'bold', color: '#333' }}
                    >
                      {t(reason.nameKey)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
