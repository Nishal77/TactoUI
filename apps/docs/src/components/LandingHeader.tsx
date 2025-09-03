'use client'
import { Menu, X, Search, Github, Sun, Moon, Monitor, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const menuItems = [
    { name: 'Docs', href: '#' },
    { name: 'Components', href: '/components' },
    { name: 'Blocks', href: '#' },
]

export default function LandingHeader() {
    const [menuState, setMenuState] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark')

    useEffect(() => {
        // Apply theme on mount and when theme changes
        const root = document.documentElement
        
        if (theme === 'light') {
            root.classList.remove('dark')
            root.style.colorScheme = 'light'
        } else if (theme === 'dark') {
            root.classList.add('dark')
            root.style.colorScheme = 'dark'
        } else {
            // System theme
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            if (prefersDark) {
                root.classList.add('dark')
                root.style.colorScheme = 'dark'
            } else {
                root.classList.remove('dark')
                root.style.colorScheme = 'light'
            }
        }
    }, [theme])

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
        setTheme(newTheme)
    }
    
    return (
        <header className="fixed z-20 w-full border-b border-dashed bg-black/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-0 relative">
                {/* Left Vertical Dashed Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed bg-black/95"></div>
                
                {/* Right Vertical Dashed Line */}
                <div className="absolute right-0 top-0 bottom-0 w-px border-r border-dashed border-gray-600"></div>
                
                <div className="flex items-center justify-between h-16 ml-4 mr-4">
                    {/* Left Section - Logo and Brand */}
                    <div className="flex items-center space-x-2">
                        <span className="text-base font-semibold text-white">TactoUI</span>
                    </div>

                    {/* Center Section - Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full pl-10 pr-16 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <kbd className="flex items-center gap-0.5 px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-700 border border-gray-600 rounded">
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
                                    className="text-gray-400 hover:text-white transition-colors duration-150 text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4">
                            {/* GitHub Link */}
                            <Link
                                href="https://github.com/tactoui/tactoui"
                                className="p-2 text-gray-300 hover:text-white transition-colors duration-150"
                            >
                                <Github className="h-5 w-5" />
                            </Link>

                            {/* Twitter Link */}
                            <Link
                                href="https://twitter.com/tactoui"
                                className="p-2 text-gray-300 hover:text-white transition-colors duration-150"
                            >
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>

                        {/* Theme Controls */}
                        <div className="flex items-center bg-gray-800 rounded-lg p-1">
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
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-150"
                        >
                            {menuState ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
    )
}
