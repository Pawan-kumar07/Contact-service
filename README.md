# Contact Service - React App

A modern contact service application built with Create React App, React Router, and CSS Modules.

## Getting Started

### Prerequisites

- Node.js 14+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build folder will be ready to be deployed.

## Project Structure

```
src/
├── index.js                 # Entry point
├── index.css               # Global styles and CSS variables
├── App.js                  # Main app component with routing
├── components/
│   ├── layout/
│   │   ├── AppLayout.js   # Main layout with header and navigation
│   │   └── AppLayout.module.css
│   └── chat/
│       ├── ChatWindow.js  # Chat interface component
│       └── ChatWindow.module.css
└── pages/
    ├── Index.js           # Home page (chat)
    ├── History.js         # Interaction history page
    ├── NotFound.js        # 404 page
    ├── History.module.css
    └── NotFound.module.css
public/
├── index.html            # HTML entry point
└── favicon.ico
```

## Features

- **Contact Service UI**: Clean, modern interface for customer support
- **Chat Interface**: Send and receive messages with timestamps
- **Navigation**: Multi-page navigation with React Router
- **CSS Modules**: Scoped styling with CSS modules
- **Responsive Design**: Works on desktop and mobile

## Styling

The app uses:

- CSS Modules for component-scoped styles
- CSS variables for theming (defined in `src/index.css`)
- No external UI frameworks (pure HTML/CSS)

### CSS Variables

```css
--primary: #4a5fdb --primary-light: #f0f3ff --text-primary: #1f2937
  --text-secondary: #6b7280 --border: #e5e7eb;
```

## API Integration

The frontend is ready to connect to your Java backend. Update the API endpoints in components as needed.

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from CRA (one-way operation)

## Notes

- No Tailwind CSS - using plain CSS Modules
- No Vite - using Create React App's build tool
- No Express backend - integrate with your Java backend
- Fully responsive design

## Support

For CRA documentation, visit: https://create-react-app.dev/
