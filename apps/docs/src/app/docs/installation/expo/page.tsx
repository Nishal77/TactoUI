'use client';

import Link from 'next/link';

export default function ExpoInstallationPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <Link
            href="/docs/installation"
            className="hover:text-white transition-colors"
          >
            Installation
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">Expo</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Expo Installation
        </h1>
        <p className="text-lg text-gray-400">
          Install TactoUI in your Expo React Native project.
        </p>
      </div>

      {/* Installation Steps */}
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Install TactoUI
              </h3>
              <p className="text-gray-400 mb-4">
                Install the TactoUI package and its dependencies.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400"># Install TactoUI</div>
                <div className="text-white">npx expo install @tactoui/ui</div>
                <div className="text-gray-400 mt-2">
                  # Install required dependencies
                </div>
                <div className="text-white">
                  npx expo install react-native-reanimated
                  react-native-gesture-handler
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Configure NativeWind
              </h3>
              <p className="text-gray-400 mb-4">
                Set up NativeWind for styling with Tailwind CSS.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400"># Install NativeWind</div>
                <div className="text-white">npx expo install nativewind</div>
                <div className="text-white">
                  npm install --save-dev tailwindcss
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Import Components
              </h3>
              <p className="text-gray-400 mb-4">
                Start using TactoUI components in your app.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400">// App.js</div>
                <div className="text-white">
                  {`import { Button, Card } from '@tactoui/ui';`}
                </div>
                <div className="text-white">
                  {`import { View } from 'react-native';`}
                </div>
                <div className="text-gray-400 mt-2">
                  export default function App() {`{`}
                </div>
                <div className="text-white ml-2">return (</div>
                <div className="text-white ml-4">{`<View>`}</div>
                <div className="text-white ml-6">{`<Button title="Hello TactoUI" />`}</div>
                <div className="text-white ml-4">{`</View>`}</div>
                <div className="text-white ml-2">);</div>
                <div className="text-white">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-12 bg-blue-900/20 border border-blue-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
        <p className="text-gray-400 mb-4">
          Ready to start building? Check out our component examples and start
          creating amazing mobile apps.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/components"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Components
          </Link>
          <Link
            href="/playground"
            className="px-4 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Playground
          </Link>
        </div>
      </div>
    </div>
  );
}
