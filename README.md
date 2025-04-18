# CUSpire Next.js Project

Welcome to the CUSpire Next.js project! This project is designed to create a modern web application for the Credit Union Innovation Community, utilizing the Bootswatch Darkly theme for a sleek and professional look.

## Project Structure

The project is organized as follows:

```
cuspire-nextjs
├── public
│   ├── logo.svg                # Logo for the CUSpire website
│   ├── logo-white.svg          # White version of the CUSpire logo for dark backgrounds
│   ├── hero-image.svg          # Hero image used on the homepage
│   └── favicon.ico             # Favicon for the website
├── src
│   ├── components              # Reusable components
│   │   ├── layout              # Layout components (Header, Footer, Layout)
│   │   ├── home                # Homepage specific components (Hero, ValueProposition, etc.)
│   │   └── ui                  # UI components (Card)
│   ├── pages                   # Page components
│   │   ├── _app.js             # Custom App component
│   │   ├── _document.js        # Custom Document structure
│   │   ├── about.js            # About page
│   │   ├── contact.js          # Contact page
│   │   ├── ideas.js            # Ideas page
│   │   ├── index.js            # Homepage
│   │   ├── login.js            # Login page
│   │   ├── membership.js       # Membership page
│   │   ├── solutions.js        # Solutions page
│   │   └── training.js         # Training page
│   ├── styles                  # CSS styles
│   │   ├── globals.css         # Global styles
│   │   └── Home.module.css     # Homepage specific styles
│   └── utils                   # Utility functions
│       └── validation.js       # Form validation functions
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore file
├── jsconfig.json               # JavaScript configuration
├── next.config.js              # Next.js configuration
├── package.json                # NPM configuration
└── README.md                   # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd cuspire-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features

- Responsive design using Bootstrap and Bootswatch Darkly theme.
- Components for various sections of the website, including a hero section, value propositions, testimonials, and a newsletter subscription form.
- Page routing for different sections of the site, including About, Contact, Ideas, Membership, Solutions, and Training pages.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.