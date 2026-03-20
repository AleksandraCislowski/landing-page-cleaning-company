import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface ImagePlaceholderProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
  src?: string;
  alt?: string;
}

export default function ImagePlaceholder({
  width = '100%',
  height,
  borderRadius = 5,
  src,
  alt,
  children,
}: ImagePlaceholderProps) {
  return (
    <Box
      sx={{
        width,
        height,
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#f5f5f5',
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : null}

      {children}
    </Box>
  );
}
