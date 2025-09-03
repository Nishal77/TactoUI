import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'TactoUI Playground' }} />
        <Stack.Screen name="components" options={{ title: 'Components' }} />
        <Stack.Screen name="button" options={{ title: 'Button' }} />
        <Stack.Screen name="card" options={{ title: 'Card' }} />
        <Stack.Screen name="switch" options={{ title: 'Switch' }} />
        <Stack.Screen name="input" options={{ title: 'Input' }} />
        <Stack.Screen name="badge" options={{ title: 'Badge' }} />
        <Stack.Screen name="avatar" options={{ title: 'Avatar' }} />
        <Stack.Screen name="progress" options={{ title: 'Progress' }} />
        <Stack.Screen name="checkbox" options={{ title: 'Checkbox' }} />
        <Stack.Screen name="radio" options={{ title: 'Radio' }} />
        <Stack.Screen name="slider" options={{ title: 'Slider' }} />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
