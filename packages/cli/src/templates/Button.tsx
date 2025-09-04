import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  type TouchableOpacityProps,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Button variant
   */
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  /**
   * Button size
   */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * Additional text className for styling
   */
  textClassName?: string;
}

export function Button({
  variant = 'default',
  size = 'default',
  children,
  loading = false,
  disabled = false,
  className: _className,
  textClassName: _textClassName,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const buttonStyles = {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    ...(variant === 'default' && {
      backgroundColor: '#3b82f6',
    }),
    ...(variant === 'destructive' && {
      backgroundColor: '#ef4444',
    }),
    ...(variant === 'outline' && {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#d1d5db',
    }),
    ...(variant === 'secondary' && {
      backgroundColor: '#f3f4f6',
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'transparent',
    }),
    ...(variant === 'link' && {
      backgroundColor: 'transparent',
    }),
    ...(size === 'sm' && {
      paddingHorizontal: 12,
      paddingVertical: 6,
    }),
    ...(size === 'lg' && {
      paddingHorizontal: 20,
      paddingVertical: 12,
    }),
    ...(size === 'icon' && {
      paddingHorizontal: 8,
      paddingVertical: 8,
    }),
    ...(disabled && {
      opacity: 0.5,
    }),
  };

  const textStyles = {
    fontWeight: '500' as const,
    color:
      variant === 'default' || variant === 'destructive'
        ? '#ffffff'
        : '#000000',
    ...(size === 'sm' && {
      fontSize: 12,
    }),
    ...(size === 'default' && {
      fontSize: 14,
    }),
    ...(size === 'lg' && {
      fontSize: 16,
    }),
    ...(size === 'icon' && {
      fontSize: 14,
    }),
  };

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[buttonStyles, style]}
      {...props}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={
            variant === 'default' || variant === 'destructive'
              ? 'white'
              : 'black'
          }
          style={{ marginRight: 8 }}
        />
      )}
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
