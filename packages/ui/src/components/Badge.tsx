import React from 'react';
import { View, Text, type ViewProps } from 'react-native';

export interface BadgeProps extends ViewProps {
  /**
   * Badge variant
   */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  /**
   * Badge content
   */
  children: React.ReactNode;
  /**
   * Additional className for styling
   */
  className?: string;
}

const badgeVariants = {
  default: {
    backgroundColor: '#3b82f6',
    borderColor: 'transparent',
  },
  secondary: {
    backgroundColor: '#f3f4f6',
    borderColor: 'transparent',
  },
  destructive: {
    backgroundColor: '#ef4444',
    borderColor: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#d1d5db',
  },
};

const textVariants = {
  default: {
    color: '#ffffff',
  },
  secondary: {
    color: '#374151',
  },
  destructive: {
    color: '#ffffff',
  },
  outline: {
    color: '#111827',
  },
};

export function Badge({
  variant = 'default',
  children,
  className,
  style,
  ...props
}: BadgeProps) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 9999,
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 2,
        },
        badgeVariants[variant],
        style,
      ]}
      {...props}
    >
      <Text
        style={[
          {
            fontSize: 12,
            fontWeight: '600' as const,
          },
          textVariants[variant],
        ]}
      >
        {children}
      </Text>
    </View>
  );
}