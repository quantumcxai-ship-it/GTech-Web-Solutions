# Gtech Web Solutions Corporate Website

A bespoke, high-performance corporate landing page custom-engineered for **Gtech Web Solutions Pvt Ltd**. This website showcases the company's enterprise software suite, co-operative society, and custom banking ERP solutions using a modern design system and high-fidelity interactive user experiences.

## Core Features

- **Premium Glassmorphic Design**: Frosted glass containers and cards with tailored blur diffusion profiles (`backdrop-blur-xl`), border outlines, and dynamically positioned background glow blobs for realistic visual refraction.
- **GSAP Bidirectional Animation Engine**: Custom-coded scroll triggers that dynamically play transitions on scroll-down and automatically reverse/reset them on scroll-up for a seamless, fluid navigation experience.
- **3D Mouse Parallax & Tilt**: An interactive 3D perspective tilt effect on key panels, utilizing relative coordinate tracking to shift design layers at different depth rates based on cursor position.
- **Liquid Wave & Elastic Staggers**: A continuously morphing SVG wave pattern at the footer edge, paired with staggered elastic spring reveal animations that trigger fluidly.
- **Magnetic Card Interactions**: Mouse-tracking magnetic pull effects on card contents, dynamically attracting icons and headings towards the cursor.

## Technical Architecture

The website is built with a lightweight, optimized modern stack for maximum speed and accessibility:

- **Core**: React & TypeScript
- **Bundler**: Vite (fully optimized with hot module replacement)
- **Styling**: Tailwind CSS (utility-first system)
- **Animation Framework**: GSAP (GreenSock Animation Platform) & ScrollTrigger

## Local Development & Deployment

Follow these instructions to run the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your system.

### Installation

Clone the repository, navigate to the project directory, and install the package dependencies:

```bash
npm install
```

### Running the Development Server

Start the local development server to run the application with live reload (HMR):

```bash
npm run dev
```

Once running, open your browser and navigate to the address shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To compile and optimize the website for production deployment:

```bash
npm run build
```

This compiles TypeScript, bundles all assets, and outputs a highly optimized build folder to `/dist` ready for static hosting (Vercel, Netlify, Cloudflare Pages, or traditional servers).
