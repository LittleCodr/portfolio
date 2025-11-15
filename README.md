<!-- Repo refreshed on 2025-11-15 -->
# 🖥️ Mayank Agrawal's Portfolio

<div align="center">
  <img src="./public/images/logos/logo.png" alt="Portfolio Logo" width="120px" />
  
  [![Next.js](https://img.shields.io/badge/Next.js-13.1.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.2.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

  **A unique, interactive portfolio website with an Ubuntu 20.04-inspired interface**
  
  [Live Demo](https://mayank1406.pro/) • [Report Bug](https://github.com/LittleCodr/portfolio/issues) • [Request Feature](https://github.com/LittleCodr/portfolio/issues)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About

This is my personal portfolio website featuring an **Ubuntu 20.04-inspired desktop interface**. Built with modern web technologies, it provides an interactive and engaging way to explore my skills, projects, and professional experience. The website mimics a real Ubuntu desktop environment with functional applications, a terminal, and a window management system.

### ✨ Highlights

- 🐧 **Ubuntu-themed Interface**: Authentic Ubuntu 20.04 desktop experience
- 💼 **Professional Showcase**: Comprehensive display of skills, projects, and experience
- 🎨 **Modern Design**: Clean, responsive UI that works on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal loading speeds
- 📱 **Mobile Responsive**: Fully functional on smartphones and tablets

---

## 🚀 Features

### 🖥️ Desktop Environment
- **Draggable Windows**: Fully functional window management system
- **Taskbar**: Launch and manage applications from the bottom taskbar
- **System Tray**: Display system information and quick actions
- **Desktop Icons**: Quick access to main applications

### 📱 Applications
- **Terminal**: Interactive command-line interface with custom commands
  - `about-mayank`: Display information about me
  - `cd`, `ls`, `pwd`: Navigate through virtual file system
  - `code`: Open VS Code with my GitHub repository
  - `chrome`: Open browser with my website
  - And many more!

- **About Me**: Detailed information about my background and skills
- **Projects Showcase**: Interactive display of my key projects with tech stacks
- **VS Code**: View my portfolio source code in an embedded VS Code instance
- **Contact Form**: Functional email form powered by EmailJS
- **External Links**: Direct links to GitHub, LinkedIn, and other profiles

### 🎨 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fluid transitions and interactions
- **Custom Cursor**: Enhanced visual feedback
- **Keyboard Shortcuts**: Navigate efficiently using keyboard
- **SEO Optimized**: Proper meta tags and social media integration

### 📊 Analytics & Tracking
- **Google Analytics**: Integrated analytics for visitor tracking
- **Performance Monitoring**: Track page load times and user interactions

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 13.1.2](https://nextjs.org/) - React framework with SSR/SSG
- **UI Library**: [React 18.2.0](https://reactjs.org/) - Component-based UI library
- **Styling**: [Tailwind CSS 3.2.4](https://tailwindcss.com/) - Utility-first CSS framework
- **Drag & Drop**: [React-Draggable](https://www.npmjs.com/package/react-draggable) - Draggable windows
- **Icons**: Custom SVG icons

### Backend & Services
- **Email Service**: [EmailJS](https://www.emailjs.com/) - Contact form functionality
- **Analytics**: [Google Analytics 4](https://analytics.google.com/) - Visitor tracking
- **Hosting**: Optimized for deployment on Vercel, Netlify, or similar platforms

### Development Tools
- **Package Manager**: npm / yarn
- **Code Quality**: ESLint for linting
- **Build Tool**: Next.js built-in webpack configuration
- **Version Control**: Git & GitHub

---

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.x or later) - [Download](https://nodejs.org/)
- **npm** (v8.x or later) or **yarn** (v1.22.x or later)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LittleCodr/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Configuration

#### EmailJS Setup (Required for Contact Form)

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message body
4. Update the credentials in `components/apps/gedit.js`:
   ```javascript
   // Current configuration
   const serviceID = 'service_vz46lwf';
   const templateID = 'template_8i60bqj';
   const publicKey = 'DeVMnnb1zkvXuFF1v';
   ```

#### Google Analytics Setup (Optional)

1. Create a Google Analytics 4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Update the ID in `pages/_app.js`:
   ```javascript
   const GA_TRACKING_ID = 'G-0EEBPFMJN4';
   ```

---

## 💻 Usage

### Terminal Commands

The integrated terminal supports the following commands:

| Command | Description |
|---------|-------------|
| `about-mayank` | Display information about me |
| `ls` | List files in current directory |
| `cd <dir>` | Change directory |
| `pwd` | Print working directory |
| `echo <text>` | Display text |
| `clear` | Clear terminal screen |
| `code` | Open VS Code with portfolio code |
| `spotify` | Open Spotify player |
| `chrome` | Open Chrome browser |
| `settings` | Open system settings |
| `exit` | Close terminal |

### Window Management

- **Drag**: Click and drag the title bar to move windows
- **Close**: Click the X button on the title bar
- **Minimize**: Click the minimize button
- **Maximize**: Click the maximize button (if available)
- **Focus**: Click anywhere on a window to bring it to front

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Export as static site (optional)
npm run export
```

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

1. Update `next.config.js` with your repository name
2. Run:
   ```bash
   npm run build
   npm run export
   ```
3. Deploy the `out` directory to GitHub Pages

---

## 📁 Project Structure

```
portfolio/
├── components/           # React components
│   ├── apps/            # Application components (Terminal, VS Code, etc.)
│   ├── context/         # React context providers
│   ├── screen/          # Screen/layout components
│   └── SEO/             # SEO and meta components
├── lib/                 # Utility libraries
│   └── gtag.js         # Google Analytics utilities
├── pages/               # Next.js pages
│   ├── _app.js         # Custom App component
│   ├── _document.js    # Custom Document component
│   └── index.js        # Home page
├── public/              # Static assets
│   ├── images/         # Images and icons
│   └── themes/         # Theme assets
├── styles/              # Global styles
├── apps.config.js      # Application configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Project dependencies
└── README.md          # This file
```

---

## 🎨 Customization

### Updating Personal Information

1. **About Section**: Edit `components/apps/mayank.js`
2. **Projects**: Update project data in `components/apps/mayank.js`
3. **Skills**: Modify skills section in `components/apps/mayank.js`
4. **Social Links**: Update URLs in `apps.config.js`

### Changing Theme Colors

Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'ub-orange': '#E95420',  // Main Ubuntu orange
        // Add your custom colors
      }
    }
  }
}
```

### Adding New Applications

1. Create component in `components/apps/`
2. Add configuration in `apps.config.js`
3. Import and integrate in the main app

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

Copyright (c) 2024 Mayank Agrawal

---

## 📧 Contact

**Mayank Agrawal** - iOS & Android Developer | Full Stack Engineer

- 🌐 Website: [mayank1406.pro](https://mayank1406.pro/)
- 📧 Email: [littlecodr@gmail.com](mailto:littlecodr@gmail.com)
- 💼 LinkedIn: [@mayank1406](https://linkedin.com/in/mayank1406)
- 🐙 GitHub: [@LittleCodr](https://github.com/LittleCodr)
- 🐦 Twitter: [@mindflayer_69](https://twitter.com/mindflayer_69)

**Project Link**: [https://github.com/LittleCodr/portfolio](https://github.com/LittleCodr/portfolio)

---

## 🙏 Acknowledgments

- **Original Concept**: Inspired by [Vivek Patel](https://github.com/vivek9patel)'s Ubuntu portfolio
- **Ubuntu Design**: Based on Ubuntu 20.04 Focal Fossa
- **Icons & Assets**: Ubuntu design team
- **Framework**: [Next.js](https://nextjs.org/) team for the amazing framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) team
- **Community**: All the open-source contributors who made this possible

---

<div align="center">
  
  **⭐ Star this repository if you found it helpful! ⭐**
  
  Made with ❤️ by [Mayank Agrawal](https://mayank1406.pro/)
  
</div>
