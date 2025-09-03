'use client';

import Link from 'next/link';
import { ArrowLeft, Copy, Download } from 'lucide-react';

export default function ButtonPage() {
  const codeExample = `import { Button } from '@tactoui/ui';

export function MyComponent() {
  return (
    <Button onPress={() => console.log('Pressed!')}>
      Click me
    </Button>
  );
}`;

  const variantsExample = `// Different variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

  const sizesExample = `// Different sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>`;

  const statesExample = `// Different states
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <Link
          href="/components"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Components
        </Link>
        <h1 className="text-4xl font-bold text-white mb-4">
          Button
        </h1>
        <p className="text-lg text-gray-400">
          Interactive button component with multiple variants, sizes, and states.
        </p>
      </div>

      {/* Installation */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          Installation
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-400 mb-2">Using CLI (Recommended):</p>
            <div className="flex items-center justify-between bg-gray-800 text-gray-100 p-3 rounded-md">
              <code className="font-mono text-sm">npx tactoui add button</code>
              <button
                onClick={() => navigator.clipboard.writeText('npx tactoui add button')}
                className="text-gray-400 hover:text-white"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Manual Installation:</p>
            <div className="flex items-center justify-between bg-gray-800 text-gray-100 p-3 rounded-md">
              <code className="font-mono text-sm">npm install @tactoui/ui</code>
              <button
                onClick={() => navigator.clipboard.writeText('npm install @tactoui/ui')}
                className="text-gray-400 hover:text-white"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Usage */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          Basic Usage
        </h2>
        <div className="flex items-center justify-between bg-gray-800 text-gray-100 p-4 rounded-md mb-4">
          <code className="font-mono text-sm">{codeExample}</code>
          <button
            onClick={() => navigator.clipboard.writeText(codeExample)}
            className="text-gray-400 hover:text-white ml-4"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Variants */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          Variants
        </h2>
        <p className="text-gray-400 mb-4">
          Use the <code className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-300">variant</code> prop to change the button's appearance.
        </p>
        <div className="flex items-center justify-between bg-gray-800 text-gray-100 p-4 rounded-md">
          <code className="font-mono text-sm">{variantsExample}</code>
          <button
            onClick={() => navigator.clipboard.writeText(variantsExample)}
            className="text-gray-400 hover:text-white ml-4"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Sizes */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          Sizes
        </h2>
        <p className="text-gray-400 mb-4">
          Use the <code className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-300">size</code> prop to change the button's size.
        </p>
        <div className="flex items-center justify-between bg-gray-800 text-gray-100 p-4 rounded-md">
          <code className="font-mono text-sm">{sizesExample}</code>
          <button
            onClick={() => navigator.clipboard.writeText(sizesExample)}
            className="text-gray-400 hover:text-white ml-4"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* States */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          States
        </h2>
        <p className="text-gray-400 mb-4">
          Use the <code className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-300">loading</code> and <code className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-300">disabled</code> props to control button states.
        </p>
        <div className="flex items-center justify-between bg-gray-800 text-gray-100 p-4 rounded-md">
          <code className="font-mono text-sm">{statesExample}</code>
          <button
            onClick={() => navigator.clipboard.writeText(statesExample)}
            className="text-gray-400 hover:text-white ml-4"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          API Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 font-medium text-white">Prop</th>
                <th className="text-left py-2 font-medium text-white">Type</th>
                <th className="text-left py-2 font-medium text-white">Default</th>
                <th className="text-left py-2 font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr className="border-b border-gray-800">
                <td className="py-2 font-mono text-gray-300">variant</td>
                <td className="py-2">'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'</td>
                <td className="py-2">'default'</td>
                <td className="py-2">Button variant</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 font-mono text-gray-300">size</td>
                <td className="py-2">'default' | 'sm' | 'lg' | 'icon'</td>
                <td className="py-2">'default'</td>
                <td className="py-2">Button size</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 font-mono text-gray-300">loading</td>
                <td className="py-2">boolean</td>
                <td className="py-2">false</td>
                <td className="py-2">Show loading spinner</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 font-mono text-gray-300">disabled</td>
                <td className="py-2">boolean</td>
                <td className="py-2">false</td>
                <td className="py-2">Disable the button</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-gray-300">children</td>
                <td className="py-2">React.ReactNode</td>
                <td className="py-2">-</td>
                <td className="py-2">Button content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
