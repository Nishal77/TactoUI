import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  type TouchableOpacityProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
// import { cn } from '../utils/cn';

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

const buttonVariants = {
  default: {
    backgroundColor: '#3b82f6',
  },
  destructive: {
    backgroundColor: '#ef4444',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#ffffff',
  },
  secondary: {
    backgroundColor: '#f3f4f6',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
};

const buttonSizes = {
  default: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sm: {
    height: 36,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  lg: {
    height: 44,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  icon: {
    height: 40,
    width: 40,
  },
};

const textVariants = {
  default: {
    color: '#ffffff',
  },
  destructive: {
    color: '#ffffff',
  },
  outline: {
    color: '#111827',
  },
  secondary: {
    color: '#111827',
  },
  ghost: {
    color: '#111827',
  },
  link: {
    color: '#3b82f6',
    textDecorationLine: 'underline' as const,
  },
};

const textSizes = {
  default: {
    fontSize: 14,
    fontWeight: '500' as const,
  },
  sm: {
    fontSize: 14,
  },
  lg: {
    fontSize: 16,
  },
  icon: {
    fontSize: 14,
  },
};

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

  const buttonStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    opacity: isDisabled ? 0.5 : 1,
    ...buttonVariants[variant],
    ...buttonSizes[size],
    ...(style as ViewStyle),
  };

  const textStyle: TextStyle = {
    ...textVariants[variant],
    ...textSizes[size],
  };

  return (
    <TouchableOpacity style={buttonStyle} disabled={isDisabled} {...props}>
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
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
