'use client';

import Link from 'next/link';

export default function InstallationPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">Installation</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Installation</h1>
        <p className="text-lg text-gray-400">
          How to install dependencies and structure your app.
        </p>
      </div>

      {/* Frameworks Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expo */}
          <Link
            href="/docs/installation/expo"
            className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-200 hover:bg-gray-900/70"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Expo
                </h3>
                <p className="text-sm text-gray-400">
                  React Native development platform
                </p>
              </div>
            </div>
          </Link>

          {/* Flutter */}
          <Link
            href="/docs/installation/flutter"
            className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-200 hover:bg-gray-900/70"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Flutter
                </h3>
                <p className="text-sm text-gray-400">
                  Cross-platform UI toolkit
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* TypeScript Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">TypeScript</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                TypeScript Support
              </h3>
              <p className="text-gray-400 mb-4">
                TactoUI is built with TypeScript and provides full type safety
                for all components.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400">// Install TypeScript types</div>
                <div className="text-white">
                  npm install @types/react @types/react-native
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VSCode Extension Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          VSCode Extension
        </h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                TactoUI VSCode Extension
              </h3>
              <p className="text-gray-400 mb-4">
                Get autocomplete, snippets, and documentation right in your
                editor.
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400">
                  # Install from VSCode Marketplace
                </div>
                <div className="text-white">
                  code --install-extension tactoui.tactoui-vscode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content for Testing Scrollbar */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Community</h3>
            <p className="text-gray-400 mb-4">
              Join our community of developers building amazing mobile apps with
              TactoUI.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-300">• Discord Server</div>
              <div className="text-sm text-gray-300">• GitHub Discussions</div>
              <div className="text-sm text-gray-300">• Stack Overflow</div>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <p className="text-gray-400 mb-4">
              Need help? We're here to support you in your development journey.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-300">• Documentation</div>
              <div className="text-sm text-gray-300">• Examples</div>
              <div className="text-sm text-gray-300">• Troubleshooting</div>
            </div>
          </div>
        </div>
      </div>

      {/* More Content */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Best Practices
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Performance Tips
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Use lazy loading for large component libraries</li>
              <li>• Optimize images and assets</li>
              <li>• Implement proper state management</li>
              <li>• Use React.memo for expensive components</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Accessibility
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Always provide alt text for images</li>
              <li>• Use semantic HTML elements</li>
              <li>• Ensure proper color contrast</li>
              <li>• Test with screen readers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
