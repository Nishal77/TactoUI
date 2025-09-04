import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export interface ProgressProps extends ViewProps {
  /**
   * Progress value (0-100)
   */
  value?: number;
  /**
   * Maximum value
   */
  max?: number;
  /**
   * Additional className for styling
   */
  className?: string;
}

export function Progress({
  value = 0,
  max = 100,
  className: _className,
  style,
  ...props
}: ProgressProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    progress.value = withTiming(percentage, { duration: 300 });
  }, [value, max, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  return (
    <View
      style={[
        {
          position: 'relative',
          height: 16,
          width: '100%',
          overflow: 'hidden',
          borderRadius: 9999,
          backgroundColor: '#f3f4f6',
        },
        style,
      ]}
      {...props}
    >
      <Animated.View
        style={[
          {
            height: '100%',
            width: '100%',
            flex: 1,
            backgroundColor: '#3b82f6',
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}
