import React from 'react';
import { TouchableOpacity, View, Text, type TouchableOpacityProps } from 'react-native';

export interface CheckboxProps extends Omit<TouchableOpacityProps, 'onPress'> {
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * Callback when the checkbox value changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Checkbox label
   */
  label?: string;
  /**
   * Additional className for the container
   */
  className?: string;
  /**
   * Additional className for the checkbox
   */
  checkboxClassName?: string;
  /**
   * Additional className for the label
   */
  labelClassName?: string;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  label,
  className,
  checkboxClassName,
  labelClassName,
  style,
  ...props
}: CheckboxProps) {
  const handlePress = () => {
    onCheckedChange?.(!checked);
  };

  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        },
        style,
      ]}
      onPress={handlePress}
      {...props}
    >
      <View
        style={{
          height: 16,
          width: 16,
          flexShrink: 0,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: '#3b82f6',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: checked ? '#3b82f6' : 'transparent',
        }}
      >
        {checked && (
          <Text
            style={{
              fontSize: 12,
              color: '#ffffff',
            }}
          >
            ✓
          </Text>
        )}
      </View>
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
    </TouchableOpacity>
  );
}