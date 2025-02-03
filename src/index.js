// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 setup
import './index.css';  // Your styles
import App from './App';  // Main app component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Get the root element
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
