'use client';

import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import LandingHeader from './components/LandingHeader';

export default function HeroSection() {
  return (
    <>
      <LandingHeader />

      <main>
        <section className="overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 lg:pb-24">
            {/* Left Vertical Dashed Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dashed bg-black/95"></div>

            {/* Right Vertical Dashed Line */}
            <div className="absolute right-0 top-0 bottom-0 w-px border-r border-dashed bg-black/95"></div>

            <div className="ml-4 mr-4">
              <div className="flex items-start justify-start min-h-[80vh] mt-20">
                <div className="relative z-10 max-w-4xl text-left">
                  <Link
                    href="/"
                    className="rounded-xl flex w-fit items-center gap-2 border p-1 pr-3"
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

                  <h1 className="mt-5 text-4xl font-bold md:text-5xl xl:text-6xl">
                    Your Go-To React Native UI Library for Rapid App Development
                  </h1>
                  <p className="mt-8 text-lg text-white/60 max-w-2xl">
                    Pre-built mobile components with instant CLI install.
                    Effortless UI that helps you ship your next app faster
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-8">
                    <div className="flex flex-col sm:flex-row gap-3 justify-start items-start">
                      {/* Explore Components Button */}
                      <Link
                        href="/docs"
                        className="group inline-flex items-center justify-center px-5 py-2.5 bg-white border border-[#232323] text-black font-medium rounded-lg hover:bg-white/80 transition-all duration-200 hover:shadow-md hover:shadow-[#181818]/20 text-base"
                      >
                        <span>Explore Components</span>
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </Link>

                      {/* GitHub Button */}
                      <Link
                        href="https://github.com/tactoui/tactoui"
                        className="group inline-flex items-center justify-center px-5 py-2.5 bg-[#181818] text-white font-medium rounded-lg hover:bg-[#232323] transition-all duration-200 hover:shadow-md hover:shadow-gray-800/10 border border-white/5 text-base"
                      >
                        <Github className="mr-1.5 h-4 w-4 group-hover:rotate-6 transition-transform duration-200" />
                        <span>View on GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
