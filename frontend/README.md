This is the React frontend for "The Digital Diner," a mini restaurant ordering system.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Git
- Backend running at `http://localhost:5000`

### Folder Structure 
frontend/
├── public/              # Public assets (index.html, icons, manifest)
├── src/                 # Main source code
│   ├── components/      # Reusable UI components (Menu, Cart, Order, History)
│   ├── context/         # Cart state management using Context API
│   ├── pages/           # Route-based pages (Home, Cart, Order, History)
│   ├── services/        # API interaction layer
│   ├── App.js           # App root with routing
│   ├── index.js         # Entry point to React app
│   ├── routes.js        # All routes configuration
│   ├── App.css          # Styles for App
│   ├── index.css        # Global styles
│   └── logo.svg         # App logo
├── package.json         # Frontend dependencies and scripts
├── package-lock.json    # Lock file for npm
└── README.md            # Frontend-specific instructions (optional)


### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Deployment
- Deploy to Netlify:
  1. Push code to GitHub.
  2. Connect repository to Netlify.
  3. Set environment variable `REACT_APP_API_URL` to your backend URL (e.g., `https://your-backend.onrender.com/api`).
  4. Deploy with `npm run build`.

## Notes
- Ensure the backend is running and CORS is configured for `http://localhost:3000` during development.
- Update `REACT_APP_API_URL` for production deployment.
