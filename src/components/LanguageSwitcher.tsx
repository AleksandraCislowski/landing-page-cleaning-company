import { Button, Box } from '@mui/material';
import { useState } from 'react';
import i18n from '../i18n/config';

type LanguageSwitcherProps = {
  onLanguageChange?: () => void;
};

export default function LanguageSwitcher({
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLng = language === 'en' ? 'sv' : 'en';
    i18n.changeLanguage(newLng);
    setLanguage(newLng);
    onLanguageChange?.();
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
