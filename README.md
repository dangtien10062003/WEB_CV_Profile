# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, featuring dark mode and multi-language support (English & Vietnamese).

## Features

- 🌙 **Dark Mode**: Toggle between light and dark themes with persistent storage
- 🌍 **Multi-language**: Support for English and Vietnamese with easy language switching
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Modern Tech Stack**: React, Tailwind CSS, React Router
- 🎨 **Beautiful UI**: Clean, modern design with smooth animations
- 📄 **Multiple Pages**: Home, Skills, Achievements, Contact, and CV pages

## Tech Stack

- **React** 18.2.0
- **Tailwind CSS** 3.2.7
- **React Router DOM** 6.8.1
- **Lucide React** (Icons)
- **Context API** (State Management)

## Project Structure

```
src/
├── components/
│   └── Navbar.js              # Navigation component
├── contexts/
│   ├── ThemeContext.js        # Dark/Light theme management
│   └── LanguageContext.js     # Language switching
├── hooks/
│   └── useTranslation.js     # Translation hook
├── locales/
│   ├── en.json               # English translations
│   └── vi.json               # Vietnamese translations
├── pages/
│   ├── Home.js               # Home/About page
│   ├── Skills.js             # Skills & technologies
│   ├── Achievements.js       # Projects & achievements
│   ├── Contact.js            # Contact form & info
│   └── CV.js                 # Resume/CV page
├── App.js                    # Main app component
├── index.js                  # Entry point
└── index.css                 # Global styles & Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Customization

### Adding New Languages

1. Create a new JSON file in `src/locales/` (e.g., `fr.json` for French)
2. Add the language option to the `languages` array in `src/components/Navbar.js`
3. Import the translations in `src/hooks/useTranslation.js`

### Customizing Content

- **Personal Information**: Update the content in `src/locales/en.json` and `src/locales/vi.json`
- **Styling**: Modify `src/index.css` or add custom Tailwind classes
- **Colors**: Update the color scheme in `tailwind.config.js`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Add navigation link in `src/components/Navbar.js`
4. Add translations in the locale files

## Features in Detail

### Dark Mode
- Automatic detection of system preference
- Manual toggle with persistent storage
- Smooth transitions between themes

### Multi-language Support
- Context-based language management
- Easy addition of new languages
- Persistent language selection

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized navigation for mobile devices

## Deployment

The app can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please open an issue or contact me directly.

---

Built with ❤️ using React and Tailwind CSS
