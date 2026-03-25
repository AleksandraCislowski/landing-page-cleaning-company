import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';

type LanguageSwitcherProps = {
  onLanguageChange?: () => void;
};

export default function LanguageSwitcher({
  onLanguageChange,
}: LanguageSwitcherProps) {
  const { i18n: i18nInstance } = useTranslation();
  const language = (
    i18nInstance.resolvedLanguage ||
    i18nInstance.language ||
    'en'
  )
    .split('-')[0]
    .toLowerCase();

  const toggleLanguage = async () => {
    const newLng = language === 'en' ? 'sv' : 'en';
    await i18n.changeLanguage(newLng);
    onLanguageChange?.();
  };

  return (
    <Box>
      <Button
        variant='contained'
        size='small'
        onClick={toggleLanguage}
        aria-label={
          language === 'en'
            ? 'Switch language to Swedish'
            : 'Switch language to English'
        }
        title={
          language === 'en'
            ? 'Switch language to Swedish'
            : 'Switch language to English'
        }
        sx={{ minWidth: 'auto' }}
      >
        {language === 'en' ? 'Svenska' : 'English'}
      </Button>
    </Box>
  );
}
