import React from 'react';
import { View, type ViewProps } from 'react-native';
import RNSlider from '@react-native-community/slider';
import { cn } from '../utils/cn';

export interface SliderProps extends ViewProps {
  /**
   * Current value
   */
  value?: number;
  /**
   * Minimum value
   */
  minimumValue?: number;
  /**
   * Maximum value
   */
  maximumValue?: number;
  /**
   * Step value
   */
  step?: number;
  /**
   * Callback when value changes
   */
  onValueChange?: (value: number) => void;
  /**
   * Callback when value change is complete
   */
  onSlidingComplete?: (value: number) => void;
  /**
   * Whether the slider is disabled
   */
  disabled?: boolean;
  /**
   * Additional className for styling
   */
  className?: string;
}

export function Slider({
  value = 0,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  onValueChange,
  onSlidingComplete,
  disabled = false,
  className,
  style,
  ...props
}: SliderProps) {
  return (
    <View style={[{ width: '100%' }, style]} {...props}>
      <RNSlider
        style={{ width: '100%', height: 40 }}
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
        disabled={disabled}
        minimumTrackTintColor="#3b82f6"
        maximumTrackTintColor="#e2e8f0"
      />
    </View>
  );
}
