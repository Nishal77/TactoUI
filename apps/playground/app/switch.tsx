import { View, Text, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { Switch } from '@tactoui/ui';

export default function SwitchScreen() {
  const [basicSwitch, setBasicSwitch] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 space-y-6">
        {/* Basic Switch */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Basic Switch
          </Text>
          <View className="bg-white rounded-lg border border-gray-200 p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-900">Enable notifications</Text>
              <Switch
                checked={basicSwitch}
                onCheckedChange={setBasicSwitch}
              />
            </View>
          </View>
        </View>

        {/* Settings Example */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Settings Example
          </Text>
          <View className="bg-white rounded-lg border border-gray-200">
            <View className="p-4 border-b border-gray-100">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-gray-900 font-medium">Push Notifications</Text>
                  <Text className="text-gray-600 text-sm">Receive push notifications</Text>
                </View>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </View>
            </View>
            
            <View className="p-4 border-b border-gray-100">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-gray-900 font-medium">Dark Mode</Text>
                  <Text className="text-gray-600 text-sm">Use dark theme</Text>
                </View>
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </View>
            </View>
            
            <View className="p-4">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-gray-900 font-medium">Auto Save</Text>
                  <Text className="text-gray-600 text-sm">Automatically save changes</Text>
                </View>
                <Switch
                  checked={autoSave}
                  onCheckedChange={setAutoSave}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Disabled States */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Disabled States
          </Text>
          <View className="space-y-3">
            <View className="bg-white rounded-lg border border-gray-200 p-4">
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-500">Disabled (off)</Text>
                <Switch
                  checked={false}
                  disabled
                />
              </View>
            </View>
            
            <View className="bg-white rounded-lg border border-gray-200 p-4">
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-500">Disabled (on)</Text>
                <Switch
                  checked={true}
                  disabled
                />
              </View>
            </View>
          </View>
        </View>

        {/* Current Values */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Current Values
          </Text>
          <View className="bg-white rounded-lg border border-gray-200 p-4 space-y-2">
            <Text className="text-gray-600">
              Basic Switch: {basicSwitch ? 'ON' : 'OFF'}
            </Text>
            <Text className="text-gray-600">
              Notifications: {notifications ? 'ON' : 'OFF'}
            </Text>
            <Text className="text-gray-600">
              Dark Mode: {darkMode ? 'ON' : 'OFF'}
            </Text>
            <Text className="text-gray-600">
              Auto Save: {autoSave ? 'ON' : 'OFF'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
