'use client';

import Link from 'next/link';
import { Search, Github, Sun, Moon, Monitor } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-dashed bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-12 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-1.5">
          <div className="flex h-6 w-6 items-center justify-center">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <Link
            href="/"
            className="text-lg font-bold text-white hover:text-gray-300 transition-colors"
          >
            TactoUI
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="relative w-full max-w-[280px]">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-md border bg-[#181818] py-1.5 pl-8 pr-16 text-sm text-white placeholder:text-gray-400 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
              <div className="absolute right-1.5 top-1/2 flex -translate-y-1/2 space-x-0.5">
                <kbd className="pointer-events-none inline-flex h-4 w-4 select-none items-center justify-center rounded border border-gray-600 bg-gray-800 text-xs text-gray-400">
                  ⌘
                </kbd>
                <kbd className="pointer-events-none inline-flex h-4 w-4 select-none items-center justify-center rounded border border-gray-600 bg-gray-800 text-xs text-gray-400">
                  K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/docs"
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-xs font-medium text-white hover:text-gray-300 transition-colors"
            >
              Components
            </Link>
            <Link
              href="/blocks"
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              Blocks
            </Link>
          </nav>

          {/* GitHub Icon */}
          <Link
            href="https://github.com/tactoui/tactoui"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>

          {/* Theme Controls */}
          <div className="flex items-center space-x-0.5 rounded-md border border-gray-700 bg-gray-900 p-0.5">
            <button className="rounded p-1 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <Sun className="h-3.5 w-3.5" />
            </button>
            <button className="rounded p-1 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
              <Moon className="h-3.5 w-3.5" />
            </button>
            <button className="rounded p-1 bg-gray-700 text-white">
              <Monitor className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
