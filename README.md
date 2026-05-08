# Saral Vidhya — Learning Simplified

A modern, adaptive educational platform designed to democratize learning through personalized, AI-assisted experiences. Built with cutting-edge web technologies for accessible and engaging educational content delivery.

## Overview

Saral Vidhya empowers students with adaptive, accessible, and engaging educational experiences powered by intelligent personalization. The platform aims to make quality education available to every student through an intuitive, modern web interface.

## Technology Stack

### Core Framework
- **React 19** - Modern UI library with concurrent rendering
- **TanStack Start** - Full-stack React metaframework with SSR support
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Comprehensive accessible component library
  - Accordions, Alerts, Avatars, Badges, Breadcrumbs
  - Calendars, Cards, Carousels, Charts
  - Dialogs, Drawers, Dropdowns, Forms
  - Navigation, Pagination, Popovers, Select
  - Tabs, Tables, Tooltips, and more

### State Management & Data
- **TanStack React Query** - Server state management
- **TanStack React Router** - Advanced routing with file-based routing

### Forms & Validation
- **React Hook Form** - Lightweight form management
- **Zod** - TypeScript-first schema validation

### Additional Features
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Recharts** - Data visualization
- **Embla Carousel** - Carousel component
- **React Resizable Panels** - Resizable layouts
- **Vaul** - Drawer component
- **Day Picker** - Calendar component

### Build & Development
- **Vite 7** - Lightning-fast build tool
- **Cloudflare Integration** - Serverless deployment
- **Tailwind CSS Vite Plugin** - Optimized Tailwind builds
- **ESLint + Prettier** - Code quality and formatting

## Project Structure

```
saral-vidhya/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── site/            # Site-specific components
│   │   │   ├── Navbar.tsx   # Navigation bar
│   │   │   ├── Hero.tsx     # Hero section
│   │   │   ├── Sections.tsx # Main content sections
│   │   │   └── motion.tsx   # Animation components
│   │   └── ui/              # Generic UI components (Radix UI based)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── dialog.tsx
│   │       └── ... (20+ components)
│   ├── routes/              # TanStack Router file-based routes
│   │   ├── __root.tsx      # Root layout
│   │   └── index.tsx       # Home page
│   ├── hooks/              # Custom React hooks
│   │   └── use-mobile.tsx
│   ├── lib/                # Utility functions & helpers
│   │   ├── utils.ts
│   │   ├── error-page.ts
│   │   └── error-capture.ts
│   ├── assets/             # Static assets
│   ├── router.tsx          # Router configuration
│   ├── routeTree.gen.ts    # Generated route tree (auto)
│   ├── server.ts           # SSR server configuration
│   ├── start.ts            # Application entry point
│   └── styles.css          # Global styles
├── .tanstack/              # TanStack generated files
├── components.json         # Component library config
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── wrangler.jsonc          # Cloudflare Workers config
└── .gitignore              # Git ignore rules
```

## Key Features

### User Interface
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessible Components** - Radix UI ensures WCAG compliance
- **Smooth Animations** - Framer Motion for polished interactions
- **Dynamic Content** - TanStack Query for real-time data updates

### Sections & Pages
1. **Navigation Bar** - Persistent top navigation
2. **Hero Section** - Landing page hero with call-to-action
3. **About** - Platform mission and overview
4. **Mission & Vision** - Company values and goals
5. **Problem Statement** - Education challenges addressed
6. **Solution** - How Saral Vidhya solves problems
7. **Features** - Key platform capabilities
8. **Parents Section** - Information for educators
9. **Pillars** - Core principles and philosophies
10. **CTA Section** - Call-to-action for sign-up
11. **Footer** - Links and contact information

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm/yarn/pnpm package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build development version
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm lint

# Format code
npm run format
```

### Development

The development server runs at `http://localhost:5173` (default Vite port).

Changes are hot-reloaded via Vite's HMR (Hot Module Replacement).

### Build Output

- **Development Build**: `npm run build:dev` - Larger bundle with source maps
- **Production Build**: `npm run build` - Optimized, minified bundle
- **Target**: Cloudflare Workers / Edge Runtime

## Deployment

This project is configured for **Cloudflare Workers** deployment:
- See `wrangler.jsonc` for Cloudflare configuration
- Uses `@cloudflare/vite-plugin` for seamless integration
- SSR capability via TanStack Start

### Deploy to Cloudflare

```bash
npm run build
wrangler deploy
```

## Code Quality

### Linting
```bash
npm run lint
```
Uses ESLint with:
- TypeScript support
- React hooks rules
- Prettier integration

### Formatting
```bash
npm run format
```
Prettier configuration for consistent code style.

## Architecture Highlights

### Server-Side Rendering (SSR)
- TanStack Start provides SSR out of the box
- Server entry point: `src/server.ts`
- Error handling and page generation for SEO

### Routing
- File-based routing (auto-generated `routeTree.gen.ts`)
- Type-safe route navigation
- Built-in scroll restoration

### State Management
- React Query for server state
- Context API for UI state (if needed)
- Form state via React Hook Form

### Form Handling
- Declarative form definitions with Zod
- React Hook Form for lightweight management
- Integrated error handling and validation

## Browser Support

- Modern browsers (ES2020 target)
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers with responsive design

## Performance Optimizations

- **Vite Build Optimization** - Fast development and production builds
- **Code Splitting** - Automatic route-based code splitting
- **Tree Shaking** - Unused code removal in production
- **CSS Optimization** - Tailwind CSS purging
- **Image Optimization** - Consider implementing with sharp
- **Caching** - Cloudflare edge caching support

## Contributing

When contributing to this project:
1. Follow the existing code style (auto-formatted with Prettier)
2. Ensure TypeScript strict mode compliance
3. Run `npm lint` before committing
4. Create meaningful commit messages
5. Test responsive design across devices

## Learning Resources

- [TanStack Start Documentation](https://tanstack.com/start/)
- [TanStack Router](https://tanstack.com/router/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Documentation](https://react.dev/)

## License

[Add your license here]

## Contact & Support

[Add your contact information here]

---

**Saral Vidhya** - Democratizing Education Through Technology
