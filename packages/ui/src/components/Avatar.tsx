import React from 'react';
import { View, Text, Image, type ViewProps, type ImageProps } from 'react-native';

export interface AvatarProps extends ViewProps {
  /**
   * Avatar image source
   */
  src?: string;
  /**
   * Fallback text when image is not available
   */
  fallback?: string;
  /**
   * Avatar size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Additional className for styling
   */
  className?: string;
}

const avatarSizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 48, height: 48 },
  xl: { width: 64, height: 64 },
};

const textSizes = {
  sm: { fontSize: 12 },
  md: { fontSize: 14 },
  lg: { fontSize: 16 },
  xl: { fontSize: 18 },
};

export function Avatar({
  src,
  fallback,
  size = 'md',
  className,
  style,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);
  const showImage = src && !imageError;

  return (
    <View
      style={[
        {
          position: 'relative',
          flexShrink: 0,
          overflow: 'hidden',
          borderRadius: 9999,
        },
        avatarSizes[size],
        style,
      ]}
      {...props}
    >
      {showImage ? (
        <Image
          source={{ uri: src }}
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: 1,
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
          }}
        >
          <Text
            style={[
              {
                fontWeight: '500' as const,
                color: '#6b7280',
              },
              textSizes[size],
            ]}
          >
            {fallback || '?'}
          </Text>
        </View>
      )}
    </View>
  );
}