'use client';
import {
  Menu,
  X,
  Search,
  Github,
  Sun,
  Moon,
  Monitor,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const menuItems = [
  { name: 'Docs', href: '#' },
  { name: 'Components', href: '/components' },
  { name: 'Blocks', href: '#' },
];

export default function LandingHeader() {
  const [menuState, setMenuState] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');

  useEffect(() => {
    // Apply theme on mount and when theme changes
    const root = document.documentElement;

    if (theme === 'light') {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    } else if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      // System theme
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (prefersDark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    }
  }, [theme]);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  return (
    <header className="fixed z-20 w-full border-b border-dashed bg-black/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-0 relative">
        {/* Left Vertical Dashed Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed bg-black/95"></div>

        {/* Right Vertical Dashed Line */}
        <div className="absolute right-0 top-0 bottom-0 w-px border-r border-dashed bg-black/95"></div>

        <div className="flex items-center justify-between h-16 ml-4 mr-4">
          {/* Left Section - Logo and Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-white">TactoUI</span>
          </div>

          {/* Center Section - Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-3 pr-12 py-2 bg-[#181818] border border-[#252525] rounded-lg text-white placeholder-[#444] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 text-xs font-semibold text-gray-300 bg-[#181818] border border-gray-600 rounded">
                  <span>⌘</span>
                  <span>K</span>
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation, Social, and Theme */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white/60 hover:text-white transition-colors duration-150 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/tactoui/tactoui"
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-150 border border-[#252525] bg-[#181818] rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 499.368"
                  className="h-5 w-5"
                >
                  <path
                    fill="#fff"
                    fillRule="nonzero"
                    d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"
                  />
                </svg>
                {/* <span className="text-sm font-medium">GitHub</span> */}
              </Link>

              {/* Twitter Link */}
              <Link
                href="https://twitter.com/tactoui"
                className="flex items-center px-3 py-2 border border-[#252525] bg-[#181818] rounded-lg transition-colors duration-150 hover:bg-[#23272f] hover:border-[#252525] group"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-150" />
                {/* No text, just icon with hover box effect */}
              </Link>
            </div>

            {/* Theme Controls
                        <div className="flex items-center bg-[#181818] rounded-lg p-1">
                            <button 
                                onClick={() => handleThemeChange('light')}
                                className={`p-1.5 transition-colors duration-150 ${
                                    theme === 'light' 
                                        ? 'text-white bg-gray-700 rounded' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <Sun className="h-4 w-4" />
                            </button>
                            <button 
                                onClick={() => handleThemeChange('dark')}
                                className={`p-1.5 transition-colors duration-150 ${
                                    theme === 'dark' 
                                        ? 'text-white bg-gray-700 rounded' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <Moon className="h-4 w-4" />
                            </button>
                            <button 
                                onClick={() => handleThemeChange('system')}
                                className={`p-1.5 transition-colors duration-150 ${
                                    theme === 'system' 
                                        ? 'text-white bg-gray-700 rounded' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <Monitor className="h-4 w-4" />
                            </button>
                        </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-150"
            >
              {menuState ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuState && (
          <div className="lg:hidden border-t border-gray-800 py-3">
            <div className="flex flex-col space-y-3">
              {/* Mobile Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-150 py-1.5"
                    onClick={() => setMenuState(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Controls */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                <div className="flex items-center space-x-4">
                  <Link
                    href="https://github.com/tactoui/tactoui"
                    className="p-2 text-gray-300 hover:text-white transition-colors duration-150"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://twitter.com/tactoui"
                    className="p-2 text-gray-300 hover:text-white transition-colors duration-150"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>

                <div className="flex items-center bg-gray-800 rounded-md p-0.5">
                  <button
                    onClick={() => handleThemeChange('light')}
                    className={`p-1 transition-colors duration-150 ${
                      theme === 'light'
                        ? 'text-white bg-gray-700 rounded'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Sun className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleThemeChange('dark')}
                    className={`p-1 transition-colors duration-150 ${
                      theme === 'dark'
                        ? 'text-white bg-gray-700 rounded'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Moon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleThemeChange('system')}
                    className={`p-1 transition-colors duration-150 ${
                      theme === 'system'
                        ? 'text-white bg-gray-700 rounded'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
