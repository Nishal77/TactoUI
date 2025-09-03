'use client'
import { Menu, X, Search, Github, Sun, Moon, Monitor } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
    { name: 'Docs', href: '#' },
    { name: 'Components', href: '/components' },
    { name: 'Blocks', href: '#' },
]

export default function LandingHeader() {
    const [menuState, setMenuState] = useState(false)
    
    return (
        <header className="fixed z-20 w-full border-b border-gray-800 bg-black/95 backdrop-blur">
            <div className="w-full px-6">
                <div className="flex items-center justify-between py-4">
                    {/* Left Section - Logo and Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
                            <div className="h-4 w-4 bg-black rounded-sm transform rotate-45"></div>
                        </div>
                        <span className="text-xl font-bold text-white">TactoUI</span>
                    </div>

                    {/* Center Section - Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-20 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <div className="flex items-center space-x-1">
                                    <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-300 bg-gray-700 border border-gray-600 rounded">⌘</kbd>
                                    <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-300 bg-gray-700 border border-gray-600 rounded">K</kbd>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Navigation and Controls */}
                    <div className="flex items-center space-x-6">
                        {/* Navigation Links */}
                        <nav className="hidden lg:flex items-center space-x-6">
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-150 text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* GitHub Button */}
                        <Link
                            href="https://github.com/tactoui/tactoui"
                            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-150"
                        >
                            <Github className="h-5 w-5 text-white" />
                        </Link>

                        {/* Theme Controls */}
                        <div className="flex items-center bg-gray-800 rounded-lg p-1">
                            <button className="p-1.5 text-gray-400 hover:text-white transition-colors duration-150">
                                <Sun className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-white transition-colors duration-150">
                                <Moon className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 text-white bg-gray-700 rounded transition-colors duration-150">
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
                    <div className="lg:hidden border-t border-gray-800 py-4">
                        <div className="flex flex-col space-y-4">
                            {/* Mobile Search */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Mobile Navigation */}
                            <nav className="flex flex-col space-y-3">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-150 py-2"
                                        onClick={() => setMenuState(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Mobile Controls */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                <Link
                                    href="https://github.com/tactoui/tactoui"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-150"
                                >
                                    <Github className="h-5 w-5 text-white" />
                                </Link>
                                
                                <div className="flex items-center bg-gray-800 rounded-lg p-1">
                                    <button className="p-1.5 text-gray-400 hover:text-white transition-colors duration-150">
                                        <Sun className="h-4 w-4" />
                                    </button>
                                    <button className="p-1.5 text-gray-400 hover:text-white transition-colors duration-150">
                                        <Moon className="h-4 w-4" />
                                    </button>
                                    <button className="p-1.5 text-white bg-gray-700 rounded transition-colors duration-150">
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
