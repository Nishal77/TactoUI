'use client';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import LandingHeader from '../components/LandingHeader';

export default function HeroSection() {
  return (
    <>
      <LandingHeader />

      <main>
        <section className="overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 pt-18 pb-28 lg:pb-20">
            {/* Left Vertical Dashed Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed bg-black/95"></div>

            {/* Right Vertical Dashed Line */}
            <div className="absolute right-0 top-0 bottom-0 w-px border-r border-dashed bg-black/95"></div>

            <div className="ml-4 mr-4">
              <div className="flex items-center justify-center min-h-[80vh] mt-16">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                  {/* <div className="mx-auto flex w-fit items-center gap-2 border border-gray-600 rounded-full px-4 py-2">
                                    <span className="bg-blue-600 rounded-full px-2 py-1 text-xs text-white">Beta</span>
                                    <span className="text-sm text-gray-300">
                                        Built with <span className="font-semibold text-white">NativeWind</span> &amp; <span className="font-semibold text-white">Tailwind CSS</span>
                                    </span>
                                    <span className="text-xs text-yellow-400 bg-yellow-900/40 rounded-full px-2 py-1 ml-2">Early Access</span>
                                    <ArrowRight className="size-4 text-gray-400" />
                                </div> */}
                  <Link
                    href="/"
                    className="rounded-xl mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                  >
                    <span className="bg-muted rounded-lg px-2 py-1 text-xs text-white/60">
                      New
                    </span>
                    <span className="text-sm text-white/80">
                      React Native UI · Open Source
                    </span>
                    <span className="bg-white/30 block h-4 w-px"></span>

                    <ArrowRight className="size-4" />
                  </Link>

                  <h1 className="mt-5  text-4xl font-bold md:text-5xl xl:text-6xl">
                    Your Go-To React Native UI Library for Rapid App Development
                  </h1>
                  <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto">
                    Pre-built mobile components with instant CLI install.
                    Effortless UI that helps you ship your next app faster
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-12">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      {/* Explore Components Button */}
                      <Link
                        href="/components"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-[#181818] border border-[#232323] text-white font-semibold rounded-xl hover:bg-[#232323] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#181818]/25"
                      >
                        <span>Explore Components</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>

                      {/* GitHub Button */}
                      <Link
                        href="https://github.com/tactoui/tactoui"
                        className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-800/25 border border-gray-700 hover:border-gray-600"
                      >
                        <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span>View on GitHub</span>
                      </Link>
                    </div>
                  </div>

                  {/* Feature List */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
