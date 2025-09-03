import React from 'react';
import { Switch as RNSwitch, type SwitchProps as RNSwitchProps } from 'react-native';
import { cn } from '../utils/cn';

export interface SwitchProps extends Omit<RNSwitchProps, 'onValueChange'> {
  /**
   * Whether the switch is checked
   */
  checked?: boolean;
  /**
   * Callback when the switch value changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Additional className for styling
   */
  className?: string;
}

export function Switch({
  checked = false,
  onCheckedChange,
  className,
  style,
  ...props
}: SwitchProps) {
  return (
    <RNSwitch
      value={checked}
      onValueChange={onCheckedChange}
      trackColor={{
        false: '#e2e8f0',
        true: '#3b82f6',
      }}
      thumbColor={checked ? '#ffffff' : '#f4f4f5'}
      ios_backgroundColor="#e2e8f0"
      style={style}
      {...props}
    />
  );
}
