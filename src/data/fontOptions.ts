import { FontOption } from '../types/fonts';

export const fontOptions: FontOption[] = [
  {
    name: 'Source Code Pro',
    family: '"Source Code Pro"',
    variants: [
      { name: 'Light', weight: 300 },
      { name: 'Regular', weight: 400 },
      { name: 'Medium', weight: 500 },
      { name: 'Bold', weight: 700 }
    ],
    isMonospace: true
  },
  {
    name: 'Fira Code',
    family: '"Fira Code"',
    variants: [
      { name: 'Light', weight: 300 },
      { name: 'Regular', weight: 400 },
      { name: 'Medium', weight: 500 },
      { name: 'Bold', weight: 700 }
    ],
    isMonospace: true
  },
  {
    name: 'JetBrains Mono',
    family: '"JetBrains Mono"',
    variants: [
      { name: 'Light', weight: 300 },
      { name: 'Regular', weight: 400 },
      { name: 'Medium', weight: 500 },
      { name: 'Bold', weight: 700 }
    ],
    isMonospace: true
  },
  {
    name: 'Ubuntu Mono',
    family: '"Ubuntu Mono"',
    variants: [
      { name: 'Regular', weight: 400 },
      { name: 'Bold', weight: 700 }
    ],
    isMonospace: true
  },
  {
    name: 'Helvetica',
    family: 'Helvetica',
    variants: [
      { name: 'Regular', weight: 400 },
      { name: 'Bold', weight: 700 }
    ],
    isMonospace: false
  }
];