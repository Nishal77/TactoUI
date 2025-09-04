'use client';

import Link from 'next/link';

export default function CLIPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">CLI Reference</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">CLI Reference</h1>
        <p className="text-lg text-gray-400">
          Command-line tools to scaffold and manage TactoUI components in your
          project.
        </p>
      </div>

      {/* Installation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Installation</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Install the TactoUI CLI globally to use it across all your projects.
          </p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400"># Install globally</div>
            <div className="text-white">npm install -g @tactoui/cli</div>
            <div className="text-gray-400 mt-2"># Or use npx (recommended)</div>
            <div className="text-white">npx @tactoui/cli</div>
          </div>
        </div>
      </div>

      {/* Commands */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Commands</h2>

        {/* Add Command */}
        <div className="mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Add Component
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Add a TactoUI component to your project with all necessary imports
              and setup.
            </p>
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-400"># Add a single component</div>
              <div className="text-white">npx tactoui add button</div>
              <div className="text-gray-400 mt-2">
                # Add multiple components
              </div>
              <div className="text-white">
                npx tactoui add button card input
              </div>
              <div className="text-gray-400 mt-2"># Add with custom path</div>
              <div className="text-white">
                npx tactoui add button --path src/components/ui
              </div>
            </div>
          </div>
        </div>

        {/* List Command */}
        <div className="mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
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
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                List Components
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              View all available TactoUI components and their descriptions.
            </p>
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-400"># List all components</div>
              <div className="text-white">npx tactoui list</div>
              <div className="text-gray-400 mt-2"># List with descriptions</div>
              <div className="text-white">npx tactoui list --verbose</div>
            </div>
          </div>
        </div>

        {/* Init Command */}
        <div className="mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Initialize Project
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Set up TactoUI in your project with configuration files and
              initial setup.
            </p>
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-400">
                # Initialize TactoUI in your project
              </div>
              <div className="text-white">npx tactoui init</div>
              <div className="text-gray-400 mt-2">
                # Initialize with specific framework
              </div>
              <div className="text-white">
                npx tactoui init --framework expo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Options</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">--path, -p</h4>
                <p className="text-gray-400 text-sm">
                  Specify the directory where components should be added
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">--framework, -f</h4>
                <p className="text-gray-400 text-sm">
                  Specify the target framework (expo, react-native, flutter)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">--verbose, -v</h4>
                <p className="text-gray-400 text-sm">
                  Show detailed output and descriptions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">--help, -h</h4>
                <p className="text-gray-400 text-sm">
                  Show help information for commands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Examples</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-medium mb-2">
                Add a button component to your Expo project:
              </h4>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-sm">
                <div className="text-white">
                  npx tactoui add button --framework expo --path src/components
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">
                Initialize TactoUI in a React Native project:
              </h4>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-sm">
                <div className="text-white">
                  npx tactoui init --framework react-native
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">
                List all available components with descriptions:
              </h4>
              <div className="bg-black/50 rounded-lg p-3 font-mono text-sm">
                <div className="text-white">npx tactoui list --verbose</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
