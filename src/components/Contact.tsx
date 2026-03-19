import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Card,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., API call)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box id='contact' sx={{ py: { xs: 6, md: 10 }, background: '#f9f9f9' }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#333' }}
        >
          {t('contact.title')}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                p: 3,
                boxShadow: 'none',
                border: '1px solid #e0e0e0',
                height: '100%',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <ImagePlaceholder height={200} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PhoneIcon sx={{ mr: 2, color: '#667eea', fontSize: 28 }} />
                <Box>
                  <Typography variant='subtitle2' sx={{ color: '#666' }}>
                    {t('contact.phone')}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ fontWeight: 'bold', color: '#333' }}
                  >
                    +46 (0) 8 XXX XXXX
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ mr: 2, color: '#667eea', fontSize: 28 }} />
                <Box>
                  <Typography variant='subtitle2' sx={{ color: '#666' }}>
                    {t('contact.email')}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ fontWeight: 'bold', color: '#333' }}
                  >
                    info@pristinecleaning.se
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOnIcon
                  sx={{ mr: 2, color: '#667eea', fontSize: 28 }}
                />
                <Box>
                  <Typography variant='subtitle2' sx={{ color: '#666' }}>
                    {t('contact.address')}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ fontWeight: 'bold', color: '#333' }}
                  >
                    Stockholm, Sweden
                  </Typography>
                </Box>
              </Box>

              <Typography variant='subtitle2' sx={{ color: '#666', mt: 4 }}>
                {t('contact.hours')}
              </Typography>
              <Typography variant='body2' sx={{ color: '#333' }}>
                Mon - Fri: 08:00 - 18:00
              </Typography>
              <Typography variant='body2' sx={{ color: '#333' }}>
                Sat - Sun: 10:00 - 16:00
              </Typography>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 3, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label={t('contact.form_name')}
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  margin='normal'
                  variant='outlined'
                  required
                />
                <TextField
                  fullWidth
                  label={t('contact.form_email')}
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  margin='normal'
                  variant='outlined'
                  required
                />
                <TextField
                  fullWidth
                  label={t('contact.form_message')}
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  margin='normal'
                  variant='outlined'
                  multiline
                  rows={5}
                  required
                />
                <Button
                  type='submit'
                  variant='contained'
                  size='large'
                  sx={{
                    mt: 2,
                    background:
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    fontWeight: 'bold',
                  }}
                >
                  {t('contact.form_send')}
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
