import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    handleMenuClose();
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Logo onClick={() => scrollToSection('home')} />
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 'bold',
                display: { xs: 'none', sm: 'none', md: 'block' },
              }}
            >
              Aleksandra Cislowski Städfirma
            </Typography>
          </Box>

          {/* Spacer to push hamburger to the right */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              color='inherit'
              aria-label='menu'
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick('home')}>
                {t('nav.home')}
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('services')}>
                {t('nav.services')}
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('about')}>
                {t('nav.about')}
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('contact')}>
                {t('nav.contact')}
              </MenuItem>
              <MenuItem>
                <LanguageSwitcher />
              </MenuItem>
            </Menu>
          </Box>

          <Stack
            direction='row'
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
          >
            <Button onClick={() => scrollToSection('home')}>
              {t('nav.home')}
            </Button>
            <Button onClick={() => scrollToSection('services')}>
              {t('nav.services')}
            </Button>
            <Button onClick={() => scrollToSection('about')}>
              {t('nav.about')}
            </Button>
            <Button onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </Button>
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
