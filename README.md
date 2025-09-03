# TactoUI

An open-source React Native UI component library built with NativeWind and Tailwind CSS.

## 🚀 Features

- **Mobile-First**: Built specifically for React Native with NativeWind
- **Accessible**: Following React Native accessibility best practices
- **Customizable**: Easy to customize with Tailwind CSS classes
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **CLI Tool**: Scaffold components directly into your project
- **Documentation**: Beautiful documentation website with live examples

## 📦 Packages

This monorepo contains the following packages:

- **`@tactoui/ui`** - Core UI component library
- **`@tactoui/cli`** - CLI tool for scaffolding components
- **`@tactoui/docs`** - Documentation website
- **`@tactoui/playground`** - Expo playground app for testing components

## 🛠️ Quick Start

### Installation

```bash
# Install the UI library
npm install @tactoui/ui nativewind react-native-reanimated react-native-gesture-handler

# Install the CLI tool
npm install -g @tactoui/cli
```

### Using the CLI

```bash
# Add a component to your project
npx tactoui add button

# List all available components
npx tactoui list

# Initialize TactoUI in your project
npx tactoui init
```

### Manual Usage

```tsx
import { Button } from '@tactoui/ui';

export function MyComponent() {
  return (
    <Button onPress={() => console.log('Pressed!')}>
      Click me
    </Button>
  );
}
```

## 🎨 Components

- **Button** - Interactive button with multiple variants
- **Card** - Container component with header, content, and footer
- **Switch** - Toggle switch component
- **Input** - Text input with label and error states
- **Badge** - Small status indicator
- **Avatar** - User profile image component
- **Progress** - Progress bar with smooth animations
- **Checkbox** - Checkbox input component
- **Radio** - Radio button component
- **Slider** - Range slider component

## 🏗️ Development

### Prerequisites

- Node.js 18+
- pnpm 8+
- Expo CLI (for playground)

### Setup

```bash
# Clone the repository
git clone https://github.com/tactoui/tactoui.git
cd tactoui

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev          # Start all apps in development mode
pnpm build        # Build all packages
pnpm lint         # Lint all packages
pnpm test         # Run tests
pnpm type-check   # Type check all packages

# Package-specific
pnpm --filter @tactoui/ui dev      # Start UI library in watch mode
pnpm --filter @tactoui/docs dev    # Start docs website
pnpm --filter @tactoui/playground start  # Start playground app
```

## 📚 Documentation

Visit our [documentation website](https://tactoui.dev) for:

- Component API reference
- Usage examples
- Installation guides
- Customization options

## 🧪 Playground

The playground app lets you test components in a real React Native environment:

```bash
cd apps/playground
pnpm start
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run `pnpm lint` and `pnpm test`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com/) for web
- Built with [NativeWind](https://nativewind.dev/) for React Native
- Powered by [Turborepo](https://turbo.build/) for monorepo management

## 📞 Support

- 📖 [Documentation](https://tactoui.dev)
- 🐛 [Issues](https://github.com/tactoui/tactoui/issues)
- 💬 [Discussions](https://github.com/tactoui/tactoui/discussions)
- 🐦 [Twitter](https://twitter.com/tactoui)

---

Built with ❤️ for the React Native community
