import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  type TouchableOpacityProps,
} from 'react-native';

export interface RadioProps extends Omit<TouchableOpacityProps, 'onPress'> {
  /**
   * Whether the radio is selected
   */
  checked?: boolean;
  /**
   * Callback when the radio value changes
   */
  onCheckedChange?: (_checked: boolean) => void;
  /**
   * Radio label
   */
  label?: string;
  /**
   * Radio value
   */
  value?: string;
  /**
   * Additional className for the container
   */
  className?: string;
  /**
   * Additional className for the radio
   */
  radioClassName?: string;
  /**
   * Additional className for the label
   */
  labelClassName?: string;
}

export function Radio({
  checked: _checked = false,
  onCheckedChange,
  label,
  value: _value,
  className: _className,
  radioClassName: _radioClassName,
  labelClassName: _labelClassName,
  style,
  ...props
}: RadioProps) {
  const handlePress = () => {
    onCheckedChange?.(!_checked);
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
          aspectRatio: 1,
          height: 16,
          width: 16,
          borderRadius: 9999,
          borderWidth: 1,
          borderColor: _checked ? '#3b82f6' : '#d1d5db',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {_checked && (
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 9999,
              backgroundColor: '#3b82f6',
            }}
          />
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
