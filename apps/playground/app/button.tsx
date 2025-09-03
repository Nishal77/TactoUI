import { View, Text, ScrollView, Alert } from 'react-native';
import { Button } from '@tactoui/ui';

export default function ButtonScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 space-y-6">
        {/* Variants */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Variants
          </Text>
          <View className="space-y-3">
            <Button onPress={() => Alert.alert('Default button pressed!')}>
              Default
            </Button>
            <Button variant="destructive" onPress={() => Alert.alert('Destructive button pressed!')}>
              Destructive
            </Button>
            <Button variant="outline" onPress={() => Alert.alert('Outline button pressed!')}>
              Outline
            </Button>
            <Button variant="secondary" onPress={() => Alert.alert('Secondary button pressed!')}>
              Secondary
            </Button>
            <Button variant="ghost" onPress={() => Alert.alert('Ghost button pressed!')}>
              Ghost
            </Button>
            <Button variant="link" onPress={() => Alert.alert('Link button pressed!')}>
              Link
            </Button>
          </View>
        </View>

        {/* Sizes */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Sizes
          </Text>
          <View className="space-y-3">
            <Button size="sm" onPress={() => Alert.alert('Small button pressed!')}>
              Small
            </Button>
            <Button size="default" onPress={() => Alert.alert('Default button pressed!')}>
              Default
            </Button>
            <Button size="lg" onPress={() => Alert.alert('Large button pressed!')}>
              Large
            </Button>
            <Button size="icon" onPress={() => Alert.alert('Icon button pressed!')}>
              🔥
            </Button>
          </View>
        </View>

        {/* States */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            States
          </Text>
          <View className="space-y-3">
            <Button loading onPress={() => {}}>
              Loading
            </Button>
            <Button disabled onPress={() => {}}>
              Disabled
            </Button>
            <Button loading disabled onPress={() => {}}>
              Loading & Disabled
            </Button>
          </View>
        </View>

        {/* Combined Examples */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Combined Examples
          </Text>
          <View className="space-y-3">
            <Button 
              variant="destructive" 
              size="lg" 
              onPress={() => Alert.alert('Large destructive button pressed!')}
            >
              Large Destructive
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              loading 
              onPress={() => {}}
            >
              Small Outline Loading
            </Button>
            <Button 
              variant="secondary" 
              disabled 
              onPress={() => {}}
            >
              Disabled Secondary
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
