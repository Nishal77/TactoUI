import { View, Text, ScrollView } from 'react-native';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Button 
} from '@tactoui/ui';

export default function CardScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6 space-y-6">
        {/* Basic Card */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Basic Card
          </Text>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                This is a basic card with header, content, and footer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text className="text-gray-600">
                This is the card content area. You can put any content here.
              </Text>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onPress={() => {}}>
                Action
              </Button>
            </CardFooter>
          </Card>
        </View>

        {/* Card with Image */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Card with Image
          </Text>
          <Card>
            <CardHeader>
              <CardTitle>Product Card</CardTitle>
              <CardDescription>
                A card showcasing a product with image
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="h-32 bg-gray-200 rounded-lg mb-4 items-center justify-center">
                <Text className="text-gray-500">Product Image</Text>
              </View>
              <Text className="text-gray-600">
                This is a product description that goes here.
              </Text>
            </CardContent>
            <CardFooter className="flex-row justify-between">
              <Text className="text-lg font-semibold text-gray-900">$99.99</Text>
              <Button onPress={() => {}}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </View>

        {/* Multiple Cards */}
        <View>
          <Text className="text-2xl font-semibold text-gray-900 mb-4">
            Multiple Cards
          </Text>
          <View className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Feature 1</CardTitle>
                <CardDescription>
                  First feature description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-gray-600">
                  Details about the first feature go here.
                </Text>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Feature 2</CardTitle>
                <CardDescription>
                  Second feature description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-gray-600">
                  Details about the second feature go here.
                </Text>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Feature 3</CardTitle>
                <CardDescription>
                  Third feature description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-gray-600">
                  Details about the third feature go here.
                </Text>
              </CardContent>
            </Card>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
