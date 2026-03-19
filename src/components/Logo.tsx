import { Box } from '@mui/material';
import logo from '../assets/logo.png';

interface LogoProps {
  onClick?: () => void;
  alt?: string;
  height?: string;
  marginRight?: string;
}

export default function Logo({
  onClick,
  alt = 'Logo',
  height = '40px',
  marginRight = '10px',
}: LogoProps) {
  return (
    <Box
      component='img'
      src={logo}
      alt={alt}
      onClick={onClick}
      sx={(theme) => ({
        height,
        marginRight,
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          filter: `drop-shadow(0 8px 24px ${theme.palette.secondary.main}66) drop-shadow(0 0 16px ${theme.palette.secondary.main}33)`,
          transform: 'rotate(-12deg)',
        },
      })}
    />
  );
}
