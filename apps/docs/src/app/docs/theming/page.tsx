'use client';

import Link from 'next/link';

export default function ThemingPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">Theming</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Theming</h1>
        <p className="text-lg text-gray-400">
          Customize TactoUI components to match your brand and design system.
        </p>
      </div>

      {/* Theme Configuration */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Theme Configuration
        </h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            TactoUI uses a flexible theming system that allows you to customize
            colors, typography, spacing, and more. You can create your own theme
            or extend the default theme to match your brand.
          </p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400">// theme.js</div>
            <div className="text-white">export const theme = {`{`}</div>
            <div className="text-white ml-2">colors: {`{`}</div>
            <div className="text-white ml-4">primary: '#3B82F6',</div>
            <div className="text-white ml-4">secondary: '#64748B',</div>
            <div className="text-white ml-4">background: '#0F172A',</div>
            <div className="text-white ml-2">{`}`},</div>
            <div className="text-white ml-2">spacing: {`{`}</div>
            <div className="text-white ml-4">sm: 8,</div>
            <div className="text-white ml-4">md: 16,</div>
            <div className="text-white ml-4">lg: 24,</div>
            <div className="text-white ml-2">{`}`}</div>
            <div className="text-white">{`}`};</div>
          </div>
        </div>
      </div>

      {/* Color System */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Color System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Primary Colors
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <span className="text-gray-300">Primary</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <span className="text-gray-300">Primary Light</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-700 rounded"></div>
                <span className="text-gray-300">Primary Dark</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Neutral Colors
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded"></div>
                <span className="text-gray-300">White</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-500 rounded"></div>
                <span className="text-gray-300">Gray</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-900 rounded"></div>
                <span className="text-gray-300">Dark</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Typography</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Heading 1</h1>
              <p className="text-sm text-gray-400">text-4xl font-bold</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-white mb-2">
                Heading 2
              </h2>
              <p className="text-sm text-gray-400">text-3xl font-semibold</p>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white mb-2">
                Heading 3
              </h3>
              <p className="text-sm text-gray-400">text-2xl font-medium</p>
            </div>
            <div>
              <p className="text-base text-gray-300 mb-2">
                Body text with regular weight and comfortable line height for
                readability.
              </p>
              <p className="text-sm text-gray-400">text-base</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customization */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Customization
        </h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Component Customization
          </h3>
          <p className="text-gray-300 mb-4">
            Each component can be customized using props, style overrides, or
            theme tokens. This gives you complete control over the appearance
            and behavior of your components.
          </p>
          <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400">// Custom Button</div>
            <div className="text-white">{`<Button`}</div>
            <div className="text-white ml-2">title="Custom Button"</div>
            <div className="text-white ml-2">variant="primary"</div>
            <div className="text-white ml-2">size="large"</div>
            <div className="text-white ml-2">
              style={`{`}
              {`{`}
            </div>
            <div className="text-white ml-4">backgroundColor: '#FF6B6B',</div>
            <div className="text-white ml-4">borderRadius: 12,</div>
            <div className="text-white ml-2">
              {`}`}
              {`}`}
            </div>
            <div className="text-white">{`/>`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
