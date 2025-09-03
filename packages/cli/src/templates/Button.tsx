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
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
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

const buttonVariants = {
  default: 'bg-blue-500 active:bg-blue-600',
  destructive: 'bg-red-500 active:bg-red-600',
  outline: 'border border-gray-300 bg-white active:bg-gray-50',
  secondary: 'bg-gray-100 active:bg-gray-200',
  ghost: 'active:bg-gray-100',
  link: 'underline-offset-4 active:underline',
};

const buttonSizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

const textVariants = {
  default: 'text-white',
  destructive: 'text-white',
  outline: 'text-gray-900',
  secondary: 'text-gray-900',
  ghost: 'text-gray-900',
  link: 'text-blue-500 underline',
};

const textSizes = {
  default: 'text-sm font-medium',
  sm: 'text-sm',
  lg: 'text-base',
  icon: 'text-sm',
};

export function Button({
  variant = 'default',
  size = 'default',
  children,
  loading = false,
  disabled = false,
  className,
  textClassName,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const buttonClasses = [
    'inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    buttonVariants[variant],
    buttonSizes[size],
    className,
  ].filter(Boolean).join(' ');

  const textClasses = [
    textVariants[variant],
    textSizes[size],
    textClassName,
  ].filter(Boolean).join(' ');

  return (
    <TouchableOpacity
      className={buttonClasses}
      disabled={isDisabled}
      style={style}
      {...props}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === 'default' || variant === 'destructive' ? 'white' : 'black'}
          style={{ marginRight: 8 }}
        />
      )}
      <Text className={textClasses}>{children}</Text>
    </TouchableOpacity>
  );
}
