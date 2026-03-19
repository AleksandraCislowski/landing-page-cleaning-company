import { Button, Box } from '@mui/material';
import { useState } from 'react';
import i18n from '../i18n/config';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLng = language === 'en' ? 'sv' : 'en';
    i18n.changeLanguage(newLng);
    setLanguage(newLng);
  };

  return (
    <Box>
      <Button
        variant='contained'
        size='small'
        onClick={toggleLanguage}
        sx={{ minWidth: 'auto' }}
      >
        {language === 'en' ? 'Svenska' : 'English'}
      </Button>
    </Box>
  );
}
