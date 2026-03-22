import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ResidentialGuidePage() {
  const { t } = useTranslation();

  const sectionAGeneralInfo = t(
    'residentialGuide.section_a.general_info.items',
    {
      returnObjects: true,
    },
  ) as string[];
  const sectionAKitchen = t('residentialGuide.section_a.kitchen.items', {
    returnObjects: true,
  }) as string[];
  const sectionABathroomToilet = t(
    'residentialGuide.section_a.bathroom_toilet.items',
    {
      returnObjects: true,
    },
  ) as string[];
  const sectionALivingBedrooms = t(
    'residentialGuide.section_a.living_bedrooms.items',
    {
      returnObjects: true,
    },
  ) as string[];

  const sectionBNotIncluded = t(
    'residentialGuide.section_b.not_included.items',
    {
      returnObjects: true,
    },
  ) as string[];
  const sectionBPets = t('residentialGuide.section_b.pets.items', {
    returnObjects: true,
  }) as string[];
  const sectionBFurniture = t(
    'residentialGuide.section_b.furniture_handling.items',
    {
      returnObjects: true,
    },
  ) as string[];
  const sectionBSensitive = t(
    'residentialGuide.section_b.sensitive_surfaces.items',
    {
      returnObjects: true,
    },
  ) as string[];
  const sectionBNotes = t('residentialGuide.section_b.additional_notes.items', {
    returnObjects: true,
  }) as string[];

  const renderList = (items: string[]) => (
    <List disablePadding>
      {items.map((item) => (
        <ListItem
          key={item}
          disableGutters
          sx={{ alignItems: 'flex-start', py: 0.4 }}
        >
          <ListItemIcon sx={{ minWidth: 30, mt: 0.2 }}>
            <CheckCircleOutlineIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText
            primary={item}
            primaryTypographyProps={{ sx: { color: '#333', lineHeight: 1.65 } }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box>
      <Header />
      <Box
        sx={{
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          py: { xs: 4, md: 7 },
          color: 'white',
          textAlign: 'center',
          opacity: 0.9,
        }}
      >
        <Container maxWidth='md'>
          <Typography variant='h3' sx={{ color: 'white', mb: 1.5 }}>
            {t('residentialGuide.title')}
          </Typography>
          <Typography
            variant='h6'
            sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: 700, mx: 'auto' }}
          >
            {t('residentialGuide.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 5, md: 8 }, background: '#f9f9f9' }}>
        <Container maxWidth='md'>
          <Card sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 3 }}>
            <Typography variant='body1' sx={{ color: '#444', lineHeight: 1.8 }}>
              {t('residentialGuide.intro')}
            </Typography>

            <Typography variant='h5' sx={{ mt: 3.2, mb: 1.2 }}>
              {t('residentialGuide.section_a.title')}
            </Typography>

            <Typography variant='subtitle1' sx={{ mt: 1.2, mb: 0.6 }}>
              {t('residentialGuide.section_a.general_info.title')}
            </Typography>
            {renderList(sectionAGeneralInfo)}

            <Typography variant='subtitle1' sx={{ mt: 1.6, mb: 0.6 }}>
              {t('residentialGuide.section_a.kitchen.title')}
            </Typography>
            {renderList(sectionAKitchen)}

            <Typography variant='subtitle1' sx={{ mt: 1.6, mb: 0.6 }}>
              {t('residentialGuide.section_a.bathroom_toilet.title')}
            </Typography>
            {renderList(sectionABathroomToilet)}

            <Typography variant='subtitle1' sx={{ mt: 1.6, mb: 0.6 }}>
              {t('residentialGuide.section_a.living_bedrooms.title')}
            </Typography>
            {renderList(sectionALivingBedrooms)}

            <Typography variant='h5' sx={{ mt: 3, mb: 1.2 }}>
              {t('residentialGuide.section_b.title')}
            </Typography>

            <Typography variant='subtitle1' sx={{ mt: 1.2, mb: 0.6 }}>
              {t('residentialGuide.section_b.not_included.title')}
            </Typography>
            {renderList(sectionBNotIncluded)}

            <Typography variant='subtitle1' sx={{ mt: 1.6, mb: 0.6 }}>
              {t('residentialGuide.section_b.pets.title')}
            </Typography>
            {renderList(sectionBPets)}

            <Typography variant='subtitle1' sx={{ mt: 1.6, mb: 0.6 }}>
              {t('residentialGuide.section_b.furniture_handling.title')}
            </Typography>
            {renderList(sectionBFurniture)}

            <Typography variant='subtitle1' sx={{ mt: 1.6, mb: 0.6 }}>
              {t('residentialGuide.section_b.sensitive_surfaces.title')}
            </Typography>
            {renderList(sectionBSensitive)}

            <Typography variant='subtitle1' sx={{ mt: 1.6, mb: 0.6 }}>
              {t('residentialGuide.section_b.additional_notes.title')}
            </Typography>
            {renderList(sectionBNotes)}

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ mt: 3.5 }}
            >
              <Button variant='contained' component='a' href='/#contact'>
                {t('residentialGuide.contact_cta')}
              </Button>
              <Button variant='outlined' component='a' href='/'>
                {t('residentialGuide.back_home_cta')}
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
