# Anime Facts 101 🎌

A clean, responsive anime trivia website featuring daily anime facts, random trivia, and engaging content for anime enthusiasts.

![Anime Facts 101](https://via.placeholder.com/800x400/133162/ffffff?text=Anime+Facts+101)

## 🌟 Features

- **Daily Featured Facts**: Curated anime trivia displayed prominently on the homepage
- **Random Fact Generator**: Discover surprising anime insights with the click of a button
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Clean UI**: Modern flat design with a carefully chosen color palette
- **Fast Navigation**: Smooth client-side routing with Next.js
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🎨 Design System

- **Primary Color**: `#133162` (Dark Blue)
- **Accent Color**: `#f43d01` (Orange)
- **Background**: White
- **Text**: `#1a1a1a` (Very Dark Gray)
- **Typography**: Inter font family
- **Style**: Flat design with subtle hover effects

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 14+** - React framework with App Router
- **React 18+** - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **Node.js 18+** - JavaScript runtime
- **npm/yarn/pnpm** - Package manager
- **ESLint** - Code linting
- **Prettier** (recommended) - Code formatting

### Deployment
- **Vercel** (recommended) - Seamless Next.js deployment
- **Netlify** - Alternative deployment option
- **Any Node.js hosting** - Self-hosted options

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/anime-facts-101.git
   cd anime-facts-101
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

3. **Run the development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```
anime-facts-101/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── fact-card.tsx
│   │   └── ad-banner.tsx
│   ├── data/               # Static data and utilities
│   │   └── facts.ts
│   ├── about/              # About page
│   ├── random/             # Random fact page
│   ├── privacy-policy/     # Privacy policy page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Customization

### Adding New Facts

Edit `app/data/facts.ts` to add new anime facts:

```typescript
export const animeFacts: AnimeFact[] = [
  {
    id: "unique-id",
    anime: "Anime Name",
    title: "Fact Title",
    preview: "Short preview text...",
    fullText: "Full fact description...",
    image: "/path/to/image.jpg",
  },
  // Add more facts...
]
```

### Styling Changes

- **Colors**: Update the color variables in `app/globals.css`
- **Fonts**: Modify the font imports in `app/layout.tsx`
- **Layout**: Adjust component styles in individual component files

### Adding New Pages

1. Create a new folder in the `app` directory
2. Add a `page.tsx` file with your component
3. Update navigation in `app/components/header.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings if needed

### Self-Hosting

1. Build the project: `npm run build`
2. Start the production server: `npm run start`
3. Configure your web server to serve the application

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Anime community for inspiration
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- All anime creators whose works inspire these facts

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/anime-facts-101/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your setup and the issue

---

**Made with ❤️ for the anime community**
```

I've created a comprehensive README.md that includes:

## 📋 Key Sections:
- **Project overview** with features and design system
- **Complete tech stack** requirements
- **Step-by-step installation** instructions
- **Project structure** explanation
- **Customization guides** for adding facts and styling
- **Deployment options** (Vercel, Netlify, self-hosting)
- **Contributing guidelines**

## 🛠️ Tech Stack Covered:
- **Next.js 14+** with App Router
- **React 18+** and TypeScript
- **Tailwind CSS** for styling
- **Node.js 18+** requirement
- Package manager options (npm/yarn/pnpm)

The README provides everything needed for someone to clone, run, and customize the project locally, with clear instructions for different skill levels and deployment preferences.

