// Importing React's StrictMode to highlight potential issues in the application
import { StrictMode } from 'react';

// Importing the `createRoot` function from React to initialize the React app
import { createRoot } from 'react-dom/client';

// Importing the main App component
import App from './App.jsx';

// Importing global CSS file for styling
import './index.css';

// Finding the root element in the HTML document where the React app will be mounted
const rootElement = document.getElementById('root');

// Rendering the App component within StrictMode, which helps identify potential problems by activating additional checks and warnings
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
