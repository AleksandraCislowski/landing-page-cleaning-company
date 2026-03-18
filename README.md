# Pristine Cleaning - Stockholm Cleaning Company Website

A modern, bilingual (Swedish/English) landing page for a cleaning company in Stockholm, built with React, TypeScript, Vite, Material-UI (MUI), and internationalization support.

## Features

✨ **Modern Design** - Clean and professional UI with gradient accents
🌍 **Bilingual Support** - Seamless switching between Swedish and English
📱 **Responsive** - Mobile-first design that works on all devices
🎨 **MUI Styled** - Material-UI components ready for custom styling
⚡ **Fast** - Built with Vite for optimal performance
♿ **Accessible** - WCAG compliant components

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with language switcher
│   ├── LanguageSwitcher.tsx # Language toggle button
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Services.tsx        # Services grid (4 service cards)
│   ├── About.tsx           # Company info and value propositions
│   ├── Contact.tsx         # Contact form and information
│   └── Footer.tsx          # Footer with social links
├── i18n/
│   └── config.ts           # i18next configuration
├── locales/
│   ├── en.json             # English translations
│   └── sv.json             # Swedish translations
├── App.tsx                 # Main App component with theme
├── main.tsx                # React entry point
└── index.css               # Global styles
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library and styling
- **i18next** - Internationalization
- **React i18next** - React bindings for i18next
- **Emotion** - CSS-in-JS (used by MUI)

## Customization

### Update Branding

Edit the business name and contact info in:

- `src/components/Header.tsx` - Company name in header
- `src/components/Footer.tsx` - Copyright and company name
- `src/locales/en.json` and `src/locales/sv.json` - All text content

### Change Colors

Modify the theme in `src/App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    primary: { main: '#YOUR_COLOR' },
    secondary: { main: '#YOUR_COLOR' },
  },
});
```

### Add More Services

Edit `src/components/Services.tsx` and add entries to the `services` array with:

- Icon (from `@mui/icons-material`)
- Translation keys in `en.json` and `sv.json`

### Update Translations

Edit the JSON files in `src/locales/`:

- `en.json` - English translations
- `sv.json` - Swedish translations

Add new translation keys and reference them with `const { t } = useTranslation()` in components.

### Add New Sections

1. Create component in `src/components/YourSection.tsx`
2. Import and add to `src/App.tsx`
3. Add translation keys to both locale files

## Styling with MUI

All components use MUI's `sx` prop for styling. Examples:

```typescript
<Box sx={{ color: '#667eea', mb: 2 }}>
  Content
</Box>
```

For more MUI documentation: https://mui.com/material-ui/getting-started/

## Languages

The app automatically detects browser language and defaults to English if not Swedish. Users can manually switch using the language toggle in the header.

Supported languages:

- 🇬🇧 English (`en`)
- 🇸🇪 Swedish (`sv`)

## License

MIT
