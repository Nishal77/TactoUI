import React from 'react';
import { TextInput, View, Text, type TextInputProps } from 'react-native';
import { cn } from '../utils/cn';

export interface InputProps extends TextInputProps {
  /**
   * Input label
   */
  label?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Additional className for the container
   */
  className?: string;
  /**
   * Additional className for the input
   */
  inputClassName?: string;
  /**
   * Additional className for the label
   */
  labelClassName?: string;
}

export function Input({
  label,
  error,
  className,
  inputClassName,
  labelClassName,
  style,
  ...props
}: InputProps) {
  const hasError = !!error;

  return (
    <View style={[{ gap: 8 }, style]}>
      {label && (
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500' as const,
            lineHeight: 20,
            color: '#111827',
          }}
        >
          {label}
        </Text>
      )}
      <TextInput
        style={[
          {
            height: 40,
            width: '100%',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: hasError ? '#ef4444' : '#d1d5db',
            backgroundColor: '#ffffff',
            paddingHorizontal: 12,
            paddingVertical: 8,
            fontSize: 16,
            color: '#111827',
          },
          style,
        ]}
        {...props}
      />
      {error && (
        <Text style={{ fontSize: 14, color: '#ef4444' }}>{error}</Text>
      )}
    </View>
  );
}
