import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface ImagePlaceholderProps {
  width?: string | number;
  height?: string | number;
  imgWidth?: number;
  imgHeight?: number;
  borderRadius?: string | number;
  children?: ReactNode;
  src?: string;
  alt?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export default function ImagePlaceholder({
  width = '100%',
  height,
  imgWidth,
  imgHeight,
  borderRadius = 5,
  src,
  alt,
  loading = 'lazy',
  fetchPriority = 'auto',
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
          width={imgWidth}
          height={imgHeight}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding='async'
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
