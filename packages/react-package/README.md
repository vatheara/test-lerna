# React Package

A simple React component library built with TypeScript.

## Installation

```bash
npm install react-package
# or
yarn add react-package
```

## Usage

```jsx
import { Button } from 'react-package';

function App() {
  return (
    <div>
      <Button 
        label="Click me" 
        variant="primary" 
        onClick={() => alert('Button clicked!')} 
      />
    </div>
  );
}
```

## Available Components

### Button

A customizable button component with different variants.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Button text content |
| onClick | () => void | undefined | Optional click handler |
| variant | 'primary' \| 'secondary' \| 'danger' | 'primary' | Button variant |
| className | string | '' | Optional additional class names |
| disabled | boolean | false | Disabled state |

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Development mode with watch
npm run dev
```

## License

MIT 