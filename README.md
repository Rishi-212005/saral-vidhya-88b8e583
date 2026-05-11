# Saral Vidhya — Learning Simplified

![Saral Vidhya Banner](https://via.placeholder.com/1200x400?text=Saral+Vidhya+-+Learning+Simplified)

**Saral Vidhya** is a modern, adaptive educational platform designed to democratize learning through personalized, AI-assisted experiences. Built with cutting-edge web technologies, it delivers highly accessible, engaging, and dynamic educational content tailored to individual student capabilities.

---

## 🚀 Tech Stack Overview

This application is built using a state-of-the-art modern React ecosystem, utilizing the **TanStack** meta-framework to ensure maximum performance, type safety, and scalability.

### Core Architecture
- **[React 19](https://react.dev/)** – The latest version of the industry-standard UI library, leveraging concurrent rendering.
- **[TanStack Start](https://tanstack.com/start/)** – A cutting-edge full-stack React framework providing Server-Side Rendering (SSR) and optimized edge deployments.
- **[TypeScript](https://www.typescriptlang.org/)** – Ensuring end-to-end type safety and an exceptional developer experience.

### Routing & State Management
- **[TanStack Router](https://tanstack.com/router/)** – Fully type-safe, file-based routing for robust navigation.
- **[TanStack Query](https://tanstack.com/query/)** – Powerful asynchronous state management and server-state synchronization.

### Styling & UI Experience
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS framework for rapid, highly-customizable responsive design.
- **[Radix UI](https://www.radix-ui.com/)** – Unstyled, highly-accessible component primitives ensuring complete WCAG compliance.
- **[Framer Motion](https://www.framer.com/motion/)** – Creating fluid, cinematic scroll reveals, staggering layouts, and micro-animations.
- **[Lucide React](https://lucide.dev/)** – Beautiful, consistent iconography.
- **[Vaul](https://vaul.emilkowal.ski/)** & **[Embla Carousel](https://www.embla-carousel.com/)** – For touch-friendly drawers and sliders.

### Forms & Data Validation
- **[React Hook Form](https://react-hook-form.com/)** – Performant, flexible, and extensible form management.
- **[Zod](https://zod.dev/)** – TypeScript-first schema declaration and validation.

### Build & Deployment
- **[Vite 7](https://vitejs.dev/)** – Next-generation, lightning-fast frontend tooling.
- **Cloudflare Workers** – Configured for high-speed, serverless edge deployment (`wrangler`).

---

## 📂 Project Structure

```text
saral-vidhya/
├── src/
│   ├── components/           
│   │   ├── site/            # Core website components (Hero, Navbar, Sections, Animations)
│   │   └── ui/              # Reusable UI library (Buttons, Cards, Dialogs via Radix)
│   ├── routes/              # TanStack file-based route definitions
│   │   ├── __root.tsx       # Root application layout
│   │   └── index.tsx        # Homepage route
│   ├── hooks/               # Custom React hooks (e.g., mobile detection)
│   ├── lib/                 # Utility functions and formatters
│   ├── assets/              # Static media (Logos, Vectors)
│   ├── router.tsx           # Global router configuration
│   ├── server.ts            # SSR entry point and server logic
│   └── start.ts             # Application client entry point
├── public/                  # Publicly served static assets
├── package.json             # Dependencies and npm scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite bundler configuration
```

---

## 🌟 Key Features

1. **Adaptive Viewport Layout:** Content sections are highly responsive, utilizing tailored padding and grid structures to perfectly fit standard monitor viewports without aggressive scrolling.
2. **Cinematic Animations:** Uses `Framer Motion` for staggered group reveals, 3D card tilt effects, parallax scrolling, and animated gradient orbs.
3. **Component-Driven UI:** Everything is modularized. The UI is split intelligently into specific components (`Hero.tsx`, `Sections.tsx`) allowing for high maintainability.
4. **Edge-Ready Serverless Design:** Pre-configured for Cloudflare deployment, meaning sub-millisecond routing and Server-Side Rendering capabilities at the edge.

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v18 or newer recommended)
- **npm** (v9 or newer)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   > The application will be running locally at `http://localhost:5173`. Vite provides instantaneous Hot Module Replacement (HMR).

3. **Build for production:**
   ```bash
   npm run build
   ```
   > This compiles the application, resolves TypeScript checks, and bundles assets for deployment.

4. **Lint and Format:**
   ```bash
   npm run lint
   npm run format
   ```

---

## 🚀 Deployment (Cloudflare)

This repository is pre-configured for seamless deployment to **Cloudflare Workers**. 

1. Ensure you have the Cloudflare CLI (`wrangler`) installed and authenticated.
2. Run the production build:
   ```bash
   npm run build
   ```
3. Deploy to the edge:
   ```bash
   wrangler deploy
   ```

---

## 👨‍💻 Author & Contributions

Built for modern learners, by modern developers. 
Designed strictly following UI/UX best practices, ensuring a premium, distraction-free environment for students and parents alike.

*© 2026 Saral Vidhya. Learning Simplified.*
