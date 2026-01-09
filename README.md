
# Revenue Hunters - Outbound Calling Software Platform

This repository contains the production-ready marketing website for **Revenue Hunters**, located at `outboundcallingsoftware.com`.

## Technology Stack
- **React 18+**
- **TypeScript**
- **Tailwind CSS** (via CDN in index.html)
- **React Router** (HashRouter for static deployment)

## GitHub Repository Structure
```
/
├── public/          # Assets (if applicable)
├── components/      # Reusable UI components
├── pages/           # Page components (Home, Pricing, Contact, Blog)
├── App.tsx          # Main routing
├── index.tsx        # Entry point
├── index.html       # Primary HTML
├── metadata.json    # App metadata
└── README.md        # Deployment instructions
```

## WordPress Formatting & Deployment
This app is designed to be deployed as a static site on WordPress.com via GitHub.

- **HashRouter**: We use `HashRouter` instead of `BrowserRouter` to ensure that direct links to `/blog` or `/pricing` do not result in a 404 error on a standard WordPress/static file server.
- **Base Path**: The app assumes it is served from the root. If deploying to a subdirectory, update the `HashRouter` base.
- **Responsive Layout**: All components are built with mobile-first Tailwind classes to ensure proper formatting across all devices when embedded or hosted via WordPress.

## Build Instructions
1. Ensure Node.js and npm are installed.
2. Initialize the project: `npm init -y`
3. Install dependencies: `npm install react react-dom react-router-dom lucide-react`
4. Run development: `npm run dev`
5. Generate static build: `npm run build` (Ensure output is in the `dist` or `build` directory).

## WordPress.com GitHub Deployment
Per [WordPress.com GitHub Deployments](https://wordpress.com/support/github-deployments/):

1. **Host Static Files**: Since this is a React SPA, you must use a static site generator or build process.
2. **Setup Output**: Ensure the `index.html` file is in the root of your deployment branch (e.g., `gh-pages` or `main`).
3. **Connect to WordPress**:
   - Go to your WordPress.com dashboard.
   - Navigate to **Settings > Hosting Configuration**.
   - Select **GitHub Deployment**.
   - Choose this repository and branch.
   - Set the output directory to `dist` (or leave as root if you push build output directly).
4. **Deploy**: Every push to the connected branch will automatically update the site on `outboundcallingsoftware.com`.

## SEO Requirements
- Primary Keyword: `outbound calling software`
- Ensure all meta tags in `index.html` are preserved.
- Use `SchemaMarkup.tsx` for structured data injection.

## Contact
For inquiries, contact `sales@revenuehunters.com` or call `(561) 264-3614`.
