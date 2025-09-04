'use client';

import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">Introduction</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Introduction</h1>
        <p className="text-lg text-gray-400">
          Welcome to TactoUI - Your Go-To React Native UI Library for Rapid
          Mobile App Development.
        </p>
      </div>

      {/* What is TactoUI */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          What is TactoUI?
        </h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            TactoUI is a comprehensive React Native UI component library
            designed to accelerate your mobile app development. Built with
            modern technologies and best practices, it provides you with
            beautiful, accessible, and customizable components.
          </p>
          <p className="text-gray-300">
            Whether you're building a simple prototype or a complex production
            app, TactoUI gives you the tools you need to create stunning user
            interfaces in record time.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Fast Development
              </h3>
            </div>
            <p className="text-gray-400">
              Pre-built components that work out of the box, reducing
              development time significantly.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                TypeScript Ready
              </h3>
            </div>
            <p className="text-gray-400">
              Full TypeScript support with comprehensive type definitions for
              better developer experience.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
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
              <h3 className="text-lg font-semibold text-white">Customizable</h3>
            </div>
            <p className="text-gray-400">
              Easy theming and customization options to match your brand and
              design requirements.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
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
              <h3 className="text-lg font-semibold text-white">CLI Tools</h3>
            </div>
            <p className="text-gray-400">
              Powerful CLI tools to scaffold components and speed up your
              development workflow.
            </p>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Getting Started
        </h2>
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">
            Ready to start building?
          </h3>
          <p className="text-gray-400 mb-4">
            Follow our installation guide to get TactoUI up and running in your
            project in minutes.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/docs/installation"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/components"
              className="px-4 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Browse Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
