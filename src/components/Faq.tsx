import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const faqItems = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
];

export default function Faq() {
  const { t } = useTranslation();

  return (
    <Box id='faq' sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth='md'>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant='h3' sx={{ mb: 1 }}>
            {t('faq.title')}
          </Typography>
          <Typography variant='body1' sx={{ color: '#666' }}>
            {t('faq.subtitle')}
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gap: 1.5 }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={item.q}
              defaultExpanded={index === 0}
              disableGutters
              sx={{
                borderRadius: '14px !important',
                border: '1px solid rgba(45, 0, 84, 0.12)',
                boxShadow: 'none',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 2.5,
                  py: 0.5,
                  '& .MuiAccordionSummary-content': { my: 1.25 },
                }}
              >
                <Typography
                  variant='h6'
                  sx={{ fontSize: { xs: '1rem', md: '1.05rem' } }}
                >
                  {t(item.q)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2.5, pb: 2.25, pt: 0 }}>
                <Typography
                  variant='body1'
                  sx={{ color: '#555', lineHeight: 1.7 }}
                >
                  {t(item.a)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
