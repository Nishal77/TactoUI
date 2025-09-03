'use client'
import { ArrowRight, Mail, SendHorizonal } from 'lucide-react'
import Link from 'next/link'
import LandingHeader from '../components/LandingHeader'

export default function HeroSection() {
    return (
        <>
            <LandingHeader />

            <main>
                <section className="overflow-hidden">
                    <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 lg:pb-20">
                        {/* Left Vertical Dashed Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed bg-black/95"></div>
                        
                        {/* Right Vertical Dashed Line */}
                        <div className="absolute right-0 top-0 bottom-0 w-px border-r border-dashed bg-black/95"></div>
                        
                        <div className="ml-4 mr-4">
                        <div className="flex items-center justify-center min-h-[80vh] mt-16">
                            <div className="relative z-10 mx-auto max-w-4xl text-center">
                                <div className="mx-auto flex w-fit items-center gap-2 border border-gray-600 rounded-full px-4 py-2">
                                    <span className="bg-blue-600 rounded-full px-2 py-1 text-xs text-white">Beta</span>
                                    <span className="text-sm text-gray-300">
                                        Built with <span className="font-semibold text-white">NativeWind</span> &amp; <span className="font-semibold text-white">Tailwind CSS</span>
                                    </span>
                                    <span className="text-xs text-yellow-400 bg-yellow-900/40 rounded-full px-2 py-1 ml-2">Early Access</span>
                                    <ArrowRight className="size-4 text-gray-400" />
                                </div>

                                <h1 className="mt-5 text-balance text-4xl font-bold md:text-5xl xl:text-6xl">Your Go-To React Native UI Library for Rapid App Development</h1>
                                <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">Build stunning React Native apps with our collection of accessible, customizable components powered by NativeWind and Tailwind CSS. Copy and paste components or use our CLI to scaffold them automatically.</p>

                                <div>
                                    <form
                                        action=""
                                        className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                                            <input
                                                placeholder="Your mail address"
                                                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                                type="email"
                                            />

                                            <div className="md:pr-1.5 lg:pr-0">
                                                <button
                                                    type="submit"
                                                    aria-label="submit"
                                                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                                    <span className="hidden md:block">Get Started</span>
                                                    <SendHorizonal
                                                        className="relative mx-auto size-5 md:hidden"
                                                        strokeWidth={2}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    <ul className="list-inside list-disc space-y-2">
                                        <li>Faster</li>
                                        <li>Modern</li>
                                        <li>100% Customizable</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}