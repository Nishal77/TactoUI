export interface ComponentInfo {
  name: string;
  description: string;
  category: string;
}

export function getAvailableComponents(): ComponentInfo[] {
  return [
    {
      name: 'Button',
      description: 'Interactive button component with multiple variants',
      category: 'Form',
    },
    {
      name: 'Card',
      description: 'Container component with header, content, and footer',
      category: 'Layout',
    },
    {
      name: 'Switch',
      description: 'Toggle switch component',
      category: 'Form',
    },
    {
      name: 'Input',
      description: 'Text input component with label and error states',
      category: 'Form',
    },
    {
      name: 'Badge',
      description: 'Small status indicator',
      category: 'Display',
    },
    {
      name: 'Avatar',
      description: 'User profile image component',
      category: 'Display',
    },
    {
      name: 'Progress',
      description: 'Progress bar component',
      category: 'Display',
    },
    {
      name: 'Checkbox',
      description: 'Checkbox input component',
      category: 'Form',
    },
    {
      name: 'Radio',
      description: 'Radio button component',
      category: 'Form',
    },
    {
      name: 'Slider',
      description: 'Range slider component',
      category: 'Form',
    },
  ];
}
