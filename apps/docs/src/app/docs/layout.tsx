import React from 'react';
import Link from 'next/link';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1.5">
              <div className="h-6 w-6 bg-white rounded flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">TactoUI</span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-[280px] mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full pl-10 pr-16 py-1.5 bg-[#181818] border border-gray-700 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <kbd className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-gray-700 border border-gray-600 rounded text-xs flex items-center justify-center text-gray-300">
                  ⌘
                </kbd>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-4">
                <Link
                  href="/docs"
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Docs (docs)
                </Link>
                <Link
                  href="/components"
                  className="text-xs text-white font-medium"
                >
                  Components
                </Link>
                <Link
                  href="/blocks"
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Blocks
                </Link>
              </nav>

              {/* GitHub */}
              <Link
                href="https://github.com"
                className="p-1.5 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>

              {/* Theme Controls */}
              <div className="flex items-center rounded-md p-0.5 bg-gray-800">
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </button>
                <button className="p-1 text-white transition-colors">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-12">
        {/* Left Sidebar */}
        <aside
          className="w-64 bg-black border-r border-dashed border-gray-600 p-4 ml-5 overflow-y-auto h-screen scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#4b5563 #1f2937' }}
        >
          <nav className="space-y-8">
            {/* Getting Started */}
            <div>
              <h3 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-3">
                Getting Started
              </h3>
              <div className="space-y-1">
                <Link
                  href="/docs/introduction"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
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
                  <span className="text-sm">Introduction</span>
                </Link>
                <Link
                  href="/docs/installation"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
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
                  <span className="text-sm">Installation</span>
                </Link>
                <Link
                  href="/docs/theming"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
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
                  <span className="text-sm">Theming</span>
                </Link>
              </div>
            </div>

            {/* UI Components */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                UI Components
              </h3>
              <div className="space-y-1">
                <Link
                  href="/components/avatar"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-sm">Avatar</span>
                </Link>
                <Link
                  href="/components/badge"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <span className="text-sm">Badge</span>
                </Link>
                <Link
                  href="/components/button"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span className="text-sm">Button</span>
                </Link>
                <Link
                  href="/components/card"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
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
                  <span className="text-sm">Card</span>
                </Link>
                <Link
                  href="/components/checkbox"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
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
                  <span className="text-sm">Checkbox</span>
                </Link>
                <Link
                  href="/components/input"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span className="text-sm">Input</span>
                </Link>
                <Link
                  href="/components/progress"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="text-sm">Progress</span>
                </Link>
                <Link
                  href="/components/radio"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                  <span className="text-sm">Radio</span>
                </Link>
                <Link
                  href="/components/slider"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                  <span className="text-sm">Slider</span>
                </Link>
                <Link
                  href="/components/switch"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  <span className="text-sm">Switch</span>
                </Link>
              </div>
            </div>

            {/* CLI */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                CLI
              </h3>
              <div className="space-y-1">
                <Link
                  href="/docs/cli"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 cursor-pointer transition-colors"
                >
                  <svg
                    className="h-4 w-4"
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
                  <span className="text-sm">CLI Reference</span>
                </Link>
              </div>
            </div>

            {/* Additional Content for Testing Scrollbar */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                More Components
              </h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Accordion</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Alert</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Dialog</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Dropdown</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Modal</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Popover</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Tooltip</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Tabs</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Table</span>
                </div>
                <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400">
                  <span className="text-sm">Form</span>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 p-6 overflow-y-auto ml-8 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#4b5563 #1f2937' }}
        >
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 bg-black border-l border-dashed border-gray-600 p-4 overflow-y-auto h-screen scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">
                On this page
              </h3>
              <nav className="space-y-2">
                <a
                  href="#overview"
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Overview
                </a>
                <a
                  href="#installation"
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Installation
                </a>
                <a
                  href="#usage"
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Usage
                </a>
                <a
                  href="#api"
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </nav>
            </div>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-3">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link
                  href="/components"
                  className="block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  All Components
                </Link>
                <Link
                  href="/playground"
                  className="block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Playground
                </Link>
                <Link
                  href="https://github.com"
                  className="block text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
