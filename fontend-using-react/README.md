# Egov Landing Page Migration to React

This project is a migration of the Egov Foundation landing page from a static HTML/CSS implementation to a modular, scalable React application using Vite.

## Features

- **Modular Components**: The page is broken down into reusable React components (Header, Hero, Stats, BoldApproaches, Sustaining, Platform, LatestAtEgov, Supporters, and Footer).
- **Dynamic Latest at eGov Section**: 
  - Fetches product/article data from a mock JSON source (`src/data/latestData.js`).
  - **Search Functionality**: Filter items by title, price, or tags.
  - **Category Filtering**: Toggle between "What's New", "Articles", and "Whitepapers".
  - **Premium UI**: Includes search bar normalization, loading states, and "No results found" feedback.
- **Scroll to Top**: A themed floating button for quick navigation.
- **Styling Parity**: Uses original CSS tokens and Bootstrap 5 to ensure 100% visual consistency with the original design.
- **Responsive Navigation**: Includes a custom offcanvas mobile menu with accordion logic.

## Tech Stack

- **React 18**
- **Vite**
- **Bootstrap 5 (CDN)**
- **Font Awesome 6 (CDN)**
- **Google Fonts (DM Sans)**

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Folder Structure

- `src/components/`: Individual section components.
- `src/data/`: Mock data storage.
- `src/App.css`: Global styles (migrated from original style.css).
- `public/img/`: Static assets and images.

## Project Maintenance

The project is designed to be scalable. To add new content, simply update `src/data/latestData.js`. The search and filter logic will automatically apply to new entries.
