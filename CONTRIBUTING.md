# Contributing to TactoUI

Thank you for your interest in contributing to TactoUI! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- Git

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/tactoui.git
   cd tactoui
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start development:
   ```bash
   pnpm dev
   ```

## 📝 Development Workflow

### Branch Naming

Use descriptive branch names:
- `feature/button-variants` - New features
- `fix/input-validation` - Bug fixes
- `docs/component-examples` - Documentation updates
- `refactor/component-structure` - Code refactoring

### Commit Messages

Follow conventional commits:
- `feat: add new button variant`
- `fix: resolve input validation issue`
- `docs: update component examples`
- `refactor: improve component structure`
- `test: add unit tests for button component`

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Add tests if applicable
4. Update documentation if needed
5. Run the following commands:
   ```bash
   pnpm lint
   pnpm type-check
   pnpm test
   pnpm build
   ```
6. Submit a pull request with a clear description

## 🧪 Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter @tactoui/ui test

# Run tests in watch mode
pnpm test --watch
```

### Writing Tests

- Write tests for new components
- Test different props and states
- Test accessibility features
- Use React Native Testing Library

Example test:
```tsx
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button onPress={onPress}>Click me</Button>);
    fireEvent.press(getByText('Click me'));
    expect(onPress).toHaveBeenCalled();
  });
});
```

## 🎨 Component Development

### Creating New Components

1. Create component file in `packages/ui/src/components/`
2. Follow the existing component structure
3. Add TypeScript interfaces
4. Use NativeWind for styling
5. Export from `packages/ui/src/index.ts`
6. Add to CLI templates in `packages/cli/src/templates/`
7. Create playground example in `apps/playground/app/`
8. Add documentation page in `apps/docs/src/app/components/`

### Component Structure

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '../utils/cn';

export interface ComponentProps {
  // Props interface
}

export function Component({ ...props }: ComponentProps) {
  return (
    <View className={cn('base-classes', props.className)}>
      {/* Component content */}
    </View>
  );
}
```

### Styling Guidelines

- Use NativeWind classes for styling
- Follow Tailwind CSS conventions
- Use the `cn` utility for conditional classes
- Support dark mode with appropriate color tokens
- Ensure accessibility with proper contrast ratios

## 📚 Documentation

### Component Documentation

Each component should have:
- Clear description
- Usage examples
- API reference with all props
- Different variants and states
- Accessibility notes

### Documentation Structure

```
apps/docs/src/app/components/
├── page.tsx              # Components overview
├── button/
│   └── page.tsx          # Button documentation
├── card/
│   └── page.tsx          # Card documentation
└── ...
```

## 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Environment information (OS, React Native version, etc.)

## 💡 Feature Requests

For feature requests, please:
- Check existing issues first
- Provide clear use case
- Explain the expected behavior
- Consider implementation complexity

## 📋 Code Review Guidelines

### For Contributors

- Keep PRs focused and small
- Write clear commit messages
- Add tests for new features
- Update documentation
- Respond to feedback promptly

### For Reviewers

- Be constructive and helpful
- Focus on code quality and functionality
- Check for accessibility issues
- Verify tests are adequate
- Ensure documentation is updated

## 🏷️ Release Process

Releases are handled automatically through Changesets:

1. Create a changeset for your changes:
   ```bash
   pnpm changeset
   ```
2. Select the packages to update
3. Describe the changes
4. Submit PR with changeset
5. Release will be handled automatically when merged

## 📞 Getting Help

- 💬 [GitHub Discussions](https://github.com/tactoui/tactoui/discussions)
- 🐛 [GitHub Issues](https://github.com/tactoui/tactoui/issues)
- 📖 [Documentation](https://tactoui.dev)

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to TactoUI! 🎉
