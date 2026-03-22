import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';

export default function ResidentialServiceDialogContent() {
  const { t } = useTranslation();
  const theme = useTheme();

  const howItWorksSteps = t('services.client_info.how_it_works.steps', {
    returnObjects: true,
  }) as string[];
  const cleaningPlanOptions = t('services.client_info.plans.options', {
    returnObjects: true,
  }) as string[];
  const importantInfoItems = t('services.client_info.important_info.items', {
    returnObjects: true,
  }) as string[];
  const agreementPoints = t('services.client_info.agreement.points', {
    returnObjects: true,
  }) as string[];
  const extraServiceExamples = t(
    'services.client_info.extra_services.examples',
    {
      returnObjects: true,
    },
  ) as string[];
  const checklistItems = t('services.client_info.checklist.items', {
    returnObjects: true,
  }) as string[];

  const renderCompactList = (items: string[]) => (
    <List disablePadding>
      {items.map((item) => (
        <ListItem key={item} disableGutters sx={{ py: 0.25 }}>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <CheckCircleOutlineIcon
              fontSize='small'
              sx={{ color: theme.palette.secondary.main }}
            />
          </ListItemIcon>
          <ListItemText
            primary={item}
            primaryTypographyProps={{
              variant: 'body2',
              sx: { color: '#333', fontWeight: 500 },
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  const sectionCardSx = {
    p: 2,
    borderRadius: 2,
    border: '1px solid rgba(45, 0, 84, 0.12)',
    backgroundColor: '#fff',
  };

  return (
    <>
      <Typography variant='h5' sx={{ fontWeight: 700, mb: 1 }}>
        {t('services.client_info.title')}
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: '#555', lineHeight: 1.75, mb: 2.5 }}
      >
        {t('services.client_info.intro')}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 1.5,
        }}
      >
        <Box sx={{ ...sectionCardSx, gridColumn: { xs: '1', md: '1 / -1' } }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.how_it_works.title')}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mb: 0.75 }}
          >
            {t('services.client_info.how_it_works.description')}
          </Typography>
          {renderCompactList(howItWorksSteps)}
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5 }}
          >
            {t('services.client_info.how_it_works.pricing')}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5 }}
          >
            {t('services.client_info.how_it_works.rut_info')}
          </Typography>
          <Typography
            variant='caption'
            sx={{ color: '#666', display: 'block', mt: 0.75 }}
          >
            {t('services.client_info.how_it_works.rut_note')}
          </Typography>
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.plans.title')}
          </Typography>
          {renderCompactList(cleaningPlanOptions)}
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.supplies.title')}
          </Typography>
          <Typography variant='body2' sx={{ color: '#444', lineHeight: 1.7 }}>
            {t('services.client_info.supplies.description')}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: theme.palette.primary.main, mt: 0.8, fontWeight: 700 }}
          >
            {t('services.client_info.supplies.link')}
          </Typography>
        </Box>

        <Box sx={{ ...sectionCardSx, gridColumn: { xs: '1', md: '1 / -1' } }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.important_info.title')}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mb: 0.75 }}
          >
            {t('services.client_info.important_info.description')}
          </Typography>
          {renderCompactList(importantInfoItems)}
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5 }}
          >
            {t('services.client_info.important_info.note')}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5 }}
          >
            {t('services.client_info.important_info.balcony')}
          </Typography>
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.insurance.title')}
          </Typography>
          <Typography variant='body2' sx={{ color: '#444', lineHeight: 1.7 }}>
            {t('services.client_info.insurance.description')}
          </Typography>
        </Box>

        <Box sx={sectionCardSx}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.agreement.title')}
          </Typography>
          {renderCompactList(agreementPoints)}
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5 }}
          >
            {t('services.client_info.agreement.trial')}
          </Typography>
        </Box>

        <Box sx={{ ...sectionCardSx, gridColumn: { xs: '1', md: '1 / -1' } }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.extra_services.title')}
          </Typography>
          {renderCompactList(extraServiceExamples)}
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5 }}
          >
            {t('services.client_info.extra_services.separate')}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5, fontWeight: 600 }}
          >
            {t('services.client_info.extra_services.pricing')}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: '#444', lineHeight: 1.7, mt: 0.5 }}
          >
            {t('services.client_info.extra_services.note')}
          </Typography>
        </Box>

        <Box sx={{ ...sectionCardSx, gridColumn: { xs: '1', md: '1 / -1' } }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 0.75 }}>
            {t('services.client_info.checklist.title')}
          </Typography>
          {renderCompactList(checklistItems)}
        </Box>
      </Box>

      <Typography
        variant='h6'
        sx={{ color: '#333', fontWeight: 700, mt: 2.25, mb: 0.5 }}
      >
        {t('services.client_info.welcome')}
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: '#333', lineHeight: 1.75, fontWeight: 600 }}
      >
        {t('services.client_info.footer')}
      </Typography>
    </>
  );
}
