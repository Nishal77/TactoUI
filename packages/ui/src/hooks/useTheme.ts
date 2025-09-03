import { useColorScheme } from 'react-native';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const colorScheme = useColorScheme();
  
  return {
    theme: colorScheme,
    isDark: colorScheme === 'dark',
    isLight: colorScheme === 'light',
  };
}
