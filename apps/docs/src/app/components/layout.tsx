import Header from '../../components/Header';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64 p-4 border-r border-gray-800 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">TactoUI</h1>
          <p className="text-sm text-gray-400">React Native UI Components</p>
        </div>
        
        <nav className="space-y-2">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Getting Started
            </h3>
            <div className="space-y-1">
              <a href="/" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Introduction
              </a>
              <a href="/installation" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Installation
              </a>
              <a href="/theming" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Theming
              </a>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Components
            </h3>
            <div className="space-y-1">
              <a href="/components/button" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Button
              </a>
              <a href="/components/card" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Card
              </a>
              <a href="/components/switch" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Switch
              </a>
              <a href="/components/input" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Input
              </a>
              <a href="/components/badge" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Badge
              </a>
              <a href="/components/avatar" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Avatar
              </a>
              <a href="/components/progress" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Progress
              </a>
              <a href="/components/checkbox" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Checkbox
              </a>
              <a href="/components/radio" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Radio
              </a>
              <a href="/components/slider" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                Slider
              </a>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
              CLI
            </h3>
            <div className="space-y-1">
              <a href="/cli" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-2 transition-colors">
                CLI Reference
              </a>
            </div>
          </div>
        </nav>
      </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:block w-64 p-4 border-l border-gray-800 overflow-y-auto">
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
            On This Page
          </h3>
          <div className="space-y-2">
            <a href="#preview" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-1 transition-colors">
              Preview
            </a>
            <a href="#installation" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-1 transition-colors">
              Installation
            </a>
            <a href="#usage" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-1 transition-colors">
              Usage
            </a>
            <a href="#api" className="block text-sm text-gray-400 hover:text-white cursor-pointer py-1 transition-colors">
              API Reference
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-900 rounded-lg">
          <h4 className="text-sm font-semibold text-white mb-2">Quick Links</h4>
          <div className="space-y-2">
            <a href="/components" className="block text-sm text-blue-400 hover:text-blue-300 cursor-pointer">
              All Components
            </a>
            <a href="/playground" className="block text-sm text-blue-400 hover:text-blue-300 cursor-pointer">
              Playground
            </a>
            <a href="https://github.com/tactoui/tactoui" className="block text-sm text-blue-400 hover:text-blue-300 cursor-pointer">
              GitHub
            </a>
          </div>
        </div>
        </aside>
      </div>
    </div>
  );
}
