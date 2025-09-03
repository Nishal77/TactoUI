import Link from 'next/link';
import { ArrowRight, Github, Star, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-white">TactoUI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/components"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Components
              </Link>
              <Link
                href="https://github.com/tactoui/tactoui"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-300 mb-8">
            <Star className="h-4 w-4 mr-2" />
            Now in Beta - React Native UI Components
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Beautiful React Native
            <span className="text-blue-400"> Components</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Build stunning React Native apps with our collection of accessible, 
            customizable components powered by NativeWind and Tailwind CSS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/components"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Explore Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/tactoui/tactoui"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-800">
            <div className="h-12 w-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Easy to Use
            </h3>
            <p className="text-gray-400">
              Copy and paste components into your app, or use our CLI to scaffold them automatically.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-800">
            <div className="h-12 w-12 bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Accessible
            </h3>
            <p className="text-gray-400">
              Built with accessibility in mind, following React Native best practices and guidelines.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-800">
            <div className="h-12 w-12 bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
              <Github className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Open Source
            </h3>
            <p className="text-gray-400">
              Free and open source. Contribute, customize, and build amazing apps together.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 TactoUI. Built with ❤️ for the React Native community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
