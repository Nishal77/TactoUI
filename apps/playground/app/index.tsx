import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@tactoui/ui';

const components = [
  { name: 'Button', description: 'Interactive button component', route: '/button' },
  { name: 'Card', description: 'Container component with sections', route: '/card' },
  { name: 'Switch', description: 'Toggle switch component', route: '/switch' },
  { name: 'Input', description: 'Text input component', route: '/input' },
  { name: 'Badge', description: 'Status indicator component', route: '/badge' },
  { name: 'Avatar', description: 'User profile image component', route: '/avatar' },
  { name: 'Progress', description: 'Progress bar component', route: '/progress' },
  { name: 'Checkbox', description: 'Checkbox input component', route: '/checkbox' },
  { name: 'Radio', description: 'Radio button component', route: '/radio' },
  { name: 'Slider', description: 'Range slider component', route: '/slider' },
];

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-4xl font-bold text-gray-900 mb-2">
            TactoUI Playground
          </Text>
          <Text className="text-lg text-gray-600">
            Test and explore TactoUI components in real-time
          </Text>
        </View>

        {/* Quick Demo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Demo</CardTitle>
            <CardDescription>
              Here's a quick preview of some TactoUI components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onPress={() => console.log('Button pressed!')}>
              Click me!
            </Button>
            <Button variant="outline" onPress={() => console.log('Outline button pressed!')}>
              Outline Button
            </Button>
            <Button variant="destructive" onPress={() => console.log('Destructive button pressed!')}>
              Destructive Button
            </Button>
          </CardContent>
        </Card>

        {/* Components Grid */}
        <View className="mb-8">
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Components
          </Text>
          <View className="space-y-3">
            {components.map((component) => (
              <Link key={component.name} href={component.route} asChild>
                <TouchableOpacity className="bg-white rounded-lg border border-gray-200 p-4 active:bg-gray-50">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                      <Text className="text-lg font-medium text-gray-900">
                        {component.name}
                      </Text>
                      <Text className="text-sm text-gray-600 mt-1">
                        {component.description}
                      </Text>
                    </View>
                    <Text className="text-gray-400">→</Text>
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>

        {/* Info */}
        <Card>
          <CardHeader>
            <CardTitle>About TactoUI</CardTitle>
            <CardDescription>
              TactoUI is a React Native UI component library built with NativeWind and Tailwind CSS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="text-gray-600 mb-4">
              This playground app lets you test all TactoUI components in a real React Native environment.
              Each component page shows different variants, sizes, and states.
            </Text>
            <Text className="text-gray-600">
              Use this app to:
            </Text>
            <Text className="text-gray-600 mt-2">
              • Test component behavior on real devices
            </Text>
            <Text className="text-gray-600">
              • Generate screenshots for documentation
            </Text>
            <Text className="text-gray-600">
              • Experiment with different props and styling
            </Text>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
