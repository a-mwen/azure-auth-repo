import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { MsalProvider } from '@azure/msal-react';  // MSAL provider for authentication
import { msalAuthProvider } from './msal/msalAuthProvider';  // MSAL configuration
import Home from './pages/Home';  // Home page component
import Dashboard from './pages/Dashboard';  // Dashboard page component
import Layout from './components/Layout';  // Layout component for shared UI (header)
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route

const App = () => {
  return (
    <Router>  {/* Wrap entire app in Router */}
      <MsalProvider instance={msalAuthProvider}>  {/* MSAL provider for auth */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </MsalProvider>
    </Router>
  );
};

export default App;
