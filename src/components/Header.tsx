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
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const appBar = document.querySelector(
      'header.MuiAppBar-root',
    ) as HTMLElement | null;
    const headerOffset = appBar ? appBar.offsetHeight : 64;
    const targetTop =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset -
      8;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) {
      return;
    }

    const sectionId = location.hash.replace('#', '');
    window.requestAnimationFrame(() => {
      scrollToSection(sectionId);
      window.setTimeout(() => {
        window.history.replaceState(
          null,
          document.title,
          `${location.pathname}${location.search}`,
        );
      }, 350);
    });
  }, [location.pathname, location.hash, location.search]);

  const handleSectionNav = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (sectionId: string) => {
    handleSectionNav(sectionId);
    handleMenuClose();
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        background: (theme) =>
          isScrolled
            ? `linear-gradient(135deg, rgba(45, 0, 84, 0.88) 0%, rgba(237, 0, 197, 0.8) 100%)`
            : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled
          ? '0 10px 28px rgba(20, 8, 32, 0.24)'
          : '0 4px 12px rgba(20, 8, 32, 0.14)',
        transition:
          'background 280ms ease, box-shadow 280ms ease, backdrop-filter 280ms ease',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: isScrolled ? 58 : 64,
            transition: 'min-height 240ms ease',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Logo
              onClick={() => handleSectionNav('home')}
              ariaLabel={t('nav.home')}
            />
            <Typography
              variant='subtitle1'
              sx={{
                color: 'inherit',
                fontWeight: 'bold',
                display: { xs: 'none', lg: 'block' },
              }}
            >
              Aleksandra Cislowski Städfirma
            </Typography>
          </Box>

          {/* Spacer to push hamburger to the right */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              color='inherit'
              aria-label='menu'
              aria-controls={open ? 'mobile-navigation-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup='menu'
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='mobile-navigation-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'mobile-navigation-menu',
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
              <MenuItem
                component={Link}
                to='/gallery'
                onClick={handleMenuClose}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('nav.gallery')}
              </MenuItem>
              <MenuItem>
                <LanguageSwitcher onLanguageChange={handleMenuClose} />
              </MenuItem>
            </Menu>
          </Box>

          <Stack
            direction='row'
            spacing={{ md: 0.5, lg: 2 }}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            <Button
              onClick={() => handleSectionNav('home')}
              sx={{
                minWidth: { md: 'auto', lg: 64 },
                px: { md: 0.9, lg: 1.6 },
                fontSize: { md: '0.8rem', lg: '0.875rem' },
              }}
            >
              {t('nav.home')}
            </Button>
            <Button
              onClick={() => handleSectionNav('services')}
              sx={{
                minWidth: { md: 'auto', lg: 64 },
                px: { md: 0.9, lg: 1.6 },
                fontSize: { md: '0.8rem', lg: '0.875rem' },
              }}
            >
              {t('nav.services')}
            </Button>
            <Button
              onClick={() => handleSectionNav('about')}
              sx={{
                minWidth: { md: 'auto', lg: 64 },
                px: { md: 0.9, lg: 1.6 },
                fontSize: { md: '0.8rem', lg: '0.875rem' },
              }}
            >
              {t('nav.about')}
            </Button>
            <Button
              onClick={() => handleSectionNav('contact')}
              sx={{
                minWidth: { md: 'auto', lg: 64 },
                px: { md: 0.9, lg: 1.6 },
                fontSize: { md: '0.8rem', lg: '0.875rem' },
              }}
            >
              {t('nav.contact')}
            </Button>
            <Button
              component={Link}
              to='/gallery'
              sx={{
                minWidth: { md: 'auto', lg: 64 },
                px: { md: 0.9, lg: 1.6 },
                fontSize: { md: '0.8rem', lg: '0.875rem' },
              }}
            >
              {t('nav.gallery')}
            </Button>
            <Box
              sx={{
                transform: { md: 'scale(0.92)', lg: 'scale(1)' },
                transformOrigin: 'right center',
              }}
            >
              <LanguageSwitcher />
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
