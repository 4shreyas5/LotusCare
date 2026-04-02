# Lotus Care - Care Marketplace

A premium care platform connecting families with verified healthcare professionals, home support workers, and personal support providers across India and Europe.

## 🌸 Features

- **Homepage** - Hero section, categories, featured providers, testimonials
- **Category Pages** - Healthcare, Home Support, Personal Support with filtering
- **Service Listings** - Provider details, packages, booking widget
- **Provider Profiles** - Reviews, credentials, services
- **Booking Flow** - 3-step checkout with simulated payment

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## 📦 Tech Stack

- React 19
- React Router v7
- Tailwind CSS
- Lucide Icons
- Shadcn/UI Components

## 🌍 Vercel Deployment

This is a **frontend-only** application. To deploy on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect React and deploy

No additional configuration needed - the app is ready for static deployment.

## 📁 Project Structure

```
/app
├── public/           # Static assets
├── src/
│   ├── components/   # Navbar, Footer, UI components
│   ├── data/         # Mock data (JSON)
│   ├── pages/        # Page components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities
│   ├── App.js        # Main app component
│   └── index.js      # Entry point
├── package.json
├── tailwind.config.js
└── craco.config.js
```

## 💶 Currency

All prices displayed in Euros (€) - targeting India & Netherlands markets.

## 📝 License

MIT
