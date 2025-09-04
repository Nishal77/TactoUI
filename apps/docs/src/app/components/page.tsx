'use client';

import Link from 'next/link';
import { ArrowRight, Copy } from 'lucide-react';

const components = [
  {
    name: 'Button',
    description:
      'Interactive button component with multiple variants and sizes',
    category: 'Form',
    usage: 'npx tactoui add button',
  },
  {
    name: 'Card',
    description:
      'Container component with header, content, and footer sections',
    category: 'Layout',
    usage: 'npx tactoui add card',
  },
  {
    name: 'Switch',
    description: 'Toggle switch component for boolean values',
    category: 'Form',
    usage: 'npx tactoui add switch',
  },
  {
    name: 'Input',
    description: 'Text input component with label and error states',
    category: 'Form',
    usage: 'npx tactoui add input',
  },
  {
    name: 'Badge',
    description: 'Small status indicator component',
    category: 'Display',
    usage: 'npx tactoui add badge',
  },
  {
    name: 'Avatar',
    description: 'User profile image component with fallback',
    category: 'Display',
    usage: 'npx tactoui add avatar',
  },
  {
    name: 'Progress',
    description: 'Progress bar component with smooth animations',
    category: 'Display',
    usage: 'npx tactoui add progress',
  },
  {
    name: 'Checkbox',
    description: 'Checkbox input component with label support',
    category: 'Form',
    usage: 'npx tactoui add checkbox',
  },
  {
    name: 'Radio',
    description: 'Radio button component for single selection',
    category: 'Form',
    usage: 'npx tactoui add radio',
  },
  {
    name: 'Slider',
    description: 'Range slider component for numeric input',
    category: 'Form',
    usage: 'npx tactoui add slider',
  },
];

export default function ComponentsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Components</h1>
        <p className="text-lg text-gray-400">
          Copy and paste components into your app, or use our CLI to scaffold
          them automatically.
        </p>
      </div>

      {/* Installation Instructions */}
      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">
          Quick Start
        </h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-blue-200 mb-2">
              1. Install TactoUI CLI:
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded-md font-mono text-sm">
              npm install -g @tactoui/cli
            </div>
          </div>
          <div>
            <p className="text-sm text-blue-200 mb-2">
              2. Add a component to your project:
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded-md font-mono text-sm">
              npx tactoui add button
            </div>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <div
            key={component.name}
            className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {component.name}
                </h3>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
                  {component.category}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              {component.description}
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">CLI Command:</span>
                <button
                  onClick={() => navigator.clipboard.writeText(component.usage)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-gray-800 p-2 rounded text-xs font-mono text-gray-300">
                {component.usage}
              </div>
            </div>

            <Link
              href={`/components/${component.name.toLowerCase()}`}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium mt-4"
            >
              View Details
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
