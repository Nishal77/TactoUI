'use client';

import Link from 'next/link';

export default function DocsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
        <p className="text-lg text-gray-400">
          Everything you need to get started with TactoUI.
        </p>
      </div>

      {/* Quick Start */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Quick Start</h2>
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">
            Get started in minutes
          </h3>
          <p className="text-gray-400 mb-4">
            Install TactoUI and start building your React Native app with
            beautiful components.
          </p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400"># Install TactoUI</div>
            <div className="text-white">npm install @tactoui/ui</div>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Getting Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/docs/introduction"
            className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-200 hover:bg-gray-900/70"
          >
            <div className="flex items-center space-x-3 mb-3">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                Introduction
              </h3>
            </div>
            <p className="text-gray-400">
              Learn about TactoUI and what makes it special for React Native
              development.
            </p>
          </Link>

          <Link
            href="/docs/installation"
            className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-200 hover:bg-gray-900/70"
          >
            <div className="flex items-center space-x-3 mb-3">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                Installation
              </h3>
            </div>
            <p className="text-gray-400">
              Set up TactoUI in your React Native project with step-by-step
              guides.
            </p>
          </Link>

          <Link
            href="/docs/theming"
            className="group p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-200 hover:bg-gray-900/70"
          >
            <div className="flex items-center space-x-3 mb-3">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                Theming
              </h3>
            </div>
            <p className="text-gray-400">
              Customize the look and feel of TactoUI components to match your
              brand.
            </p>
          </Link>
        </div>
      </div>

      {/* Components Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Components</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                UI Components
              </h3>
              <p className="text-gray-400 mb-4">
                Explore our collection of pre-built React Native components.
                Each component is designed to be accessible, customizable, and
                production-ready.
              </p>
              <Link
                href="/components"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse Components
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CLI Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">CLI Tools</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Command Line Interface
              </h3>
              <p className="text-gray-400 mb-4">
                Use our CLI to quickly scaffold components into your project.
                Save time with automated setup and configuration.
              </p>
              <Link
                href="/docs/cli"
                className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                CLI Reference
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
