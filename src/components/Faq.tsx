import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const faqItems = [
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' },
  { q: 'faq.q7', a: 'faq.a7' },
  { q: 'faq.q8', a: 'faq.a8' },
  { q: 'faq.q9', a: 'faq.a9' },
  { q: 'faq.q10', a: 'faq.a10' },
  { q: 'faq.q11', a: 'faq.a11' },
  { q: 'faq.q12', a: 'faq.a12' },
];

export default function Faq() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(faqItems[0].q);

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
          {faqItems.map((item) => (
            <Accordion
              key={item.q}
              expanded={expanded === item.q}
              onChange={handleAccordionChange(item.q)}
              disableGutters
              sx={{
                borderRadius: '14px !important',
                border: '1px solid rgba(45, 0, 84, 0.12)',
                transition:
                  'box-shadow 220ms ease, border-color 220ms ease, transform 220ms ease',
                transform:
                  expanded === item.q ? 'translateY(-1px)' : 'translateY(0)',
                borderColor:
                  expanded === item.q
                    ? 'rgba(45, 0, 84, 0.24)'
                    : 'rgba(45, 0, 84, 0.12)',
                boxShadow:
                  expanded === item.q
                    ? '0 10px 24px rgba(45, 0, 84, 0.12)'
                    : 'none',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 2.5,
                  py: 0.5,
                  '& .MuiAccordionSummary-content': { my: 1.25 },
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    transition: 'transform 240ms ease, color 240ms ease',
                    color:
                      expanded === item.q
                        ? 'secondary.main'
                        : 'rgba(45, 0, 84, 0.72)',
                  },
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
