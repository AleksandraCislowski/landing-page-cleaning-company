import { Box } from '@mui/material';
import { useState } from 'react';
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
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setHovered(false);
    onClick?.();
  };

  return (
    <Box
      component='img'
      src={logo}
      alt={alt}
      width={43}
      height={40}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={(theme) => ({
        height,
        marginRight,
        filter: hovered
          ? `drop-shadow(0 8px 24px ${theme.palette.secondary.main}66) drop-shadow(0 0 16px ${theme.palette.secondary.main}33)`
          : 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: hovered ? 'rotate(-12deg)' : 'rotate(0deg)',
      })}
    />
  );
}
