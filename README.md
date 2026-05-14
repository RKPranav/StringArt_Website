# 🧵 String Art Website

A beautiful, interactive landing page for handmade string art, built with modern web technologies. This project showcases unique string art pieces, explains the creation process, and provides a seamless way for customers to get in touch and place orders.

## ✨ Features

The application is structured into several key sections to provide a complete user experience:

- **Hero Section**: A visually striking landing area with a compelling call-to-action to explore the gallery.
- **Features**: Highlights what makes the string art unique (e.g., custom designs, handmade quality).
- **How It Works**: A step-by-step breakdown of the creation and ordering process.
- **Gallery**: A showcase of previous string art projects and designs using local image assets.
- **Testimonials**: Customer reviews and feedback to build trust.
- **Contact**: A functional contact section, including a direct WhatsApp integration for quick inquiries and orders.

## 🛠️ Technologies Used

- **[React](https://react.dev/)**: Frontend library for building the user interface.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for blazing fast development.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid, responsive styling.
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for React to create smooth, dynamic interactions.
- **[Lucide React](https://lucide.dev/)**: Beautiful, consistent icon set.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your system.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/RKPranav/StringArt_Website.git
   cd string_art
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to the URL provided in your terminal (usually `http://localhost:5173`) to view the application.

## 📂 Project Structure

```text
string_art/
├── public/               # Static assets like images and favicons
│   └── Image/            # String art gallery images
├── src/
│   ├── assets/           # React component specific assets
│   ├── components/       # Reusable React components (Hero, Gallery, Contact, etc.)
│   ├── App.jsx           # Main application layout and routing
│   ├── index.css         # Global Tailwind directives and styles
│   └── main.jsx          # React entry point
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## 🌐 Deployment

The application is optimized for standard static site hosting. To build the project for production, run:

```bash
npm run build
```

This will generate a `dist` directory with your minified and optimized production-ready files.
