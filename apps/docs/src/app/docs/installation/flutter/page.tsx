'use client';

import Link from 'next/link';

export default function FlutterInstallationPage() {
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
          <span className="text-white">Flutter</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Flutter Installation
        </h1>
        <p className="text-lg text-gray-400">
          Install TactoUI in your Flutter project.
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
                Add to pubspec.yaml
              </h3>
              <p className="text-gray-400 mb-4">
                Add TactoUI to your Flutter project dependencies.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400"># pubspec.yaml</div>
                <div className="text-white">dependencies:</div>
                <div className="text-white ml-2">flutter:</div>
                <div className="text-white ml-4">sdk: flutter</div>
                <div className="text-white ml-2">tactoui: ^0.1.0</div>
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
                Install Dependencies
              </h3>
              <p className="text-gray-400 mb-4">
                Get the packages and update your project.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400"># Install packages</div>
                <div className="text-white">flutter pub get</div>
                <div className="text-gray-400 mt-2"># Update dependencies</div>
                <div className="text-white">flutter pub upgrade</div>
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
                Import and Use
              </h3>
              <p className="text-gray-400 mb-4">
                Import TactoUI components and start building your app.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400">// main.dart</div>
                <div className="text-white">
                  import 'package:flutter/material.dart';
                </div>
                <div className="text-white">
                  import 'package:tactoui/tactoui.dart';
                </div>
                <div className="text-gray-400 mt-2">void main() {`{`}</div>
                <div className="text-white ml-2">runApp(MyApp());</div>
                <div className="text-white">{`}`}</div>
                <div className="text-gray-400 mt-2">
                  class MyApp extends StatelessWidget {`{`}
                </div>
                <div className="text-white ml-2">@override</div>
                <div className="text-white ml-2">
                  Widget build(BuildContext context) {`{`}
                </div>
                <div className="text-white ml-4">return MaterialApp(</div>
                <div className="text-white ml-6">home: TactoButton(</div>
                <div className="text-white ml-8">text: 'Hello TactoUI',</div>
                <div className="text-white ml-8">
                  onPressed: () {`{`}
                  {`}`},
                </div>
                <div className="text-white ml-6">),</div>
                <div className="text-white ml-4">);</div>
                <div className="text-white ml-2">{`}`}</div>
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
          Ready to start building? Check out our Flutter component examples and
          start creating amazing mobile apps.
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
